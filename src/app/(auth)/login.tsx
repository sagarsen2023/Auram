import FormFieldRenderer, {
  RequiredFieldsType,
} from "@/src/components/form-field-renderer.component";
import ThemeText from "@/src/components/theme-text.component";
import { SIZES, useThemeColor } from "@/src/constants/theme";
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useForm, FormProvider } from "react-hook-form";
import PrimaryRoundedButton from "@/src/components/primary-rounded-button.component";
import {
  loginValidator,
  LoginValidatorType,
} from "@/src/validators/auth.validator";
import { zodResolver } from "@hookform/resolvers/zod";
import authAPI from "@/src/services/auth.service";
import Toast from "react-native-toast-message";
import toastConfig from "@/src/components/toast.config";

export default function Login() {
  const COLORS = useThemeColor();
  const methods = useForm<LoginValidatorType>({
    resolver: zodResolver(loginValidator),
  });
  const { handleSubmit } = methods;
  const requiredFields: RequiredFieldsType = [
    {
      fieldName: "email",
      type: "email",
      placeHolder: "Enter your Email",
      label: "Email",
    },
    {
      fieldName: "password",
      type: "password",
      placeHolder: "Enter your Password",
      label: "Password",
    },
  ];

  const onSubmit = async (data: LoginValidatorType) => {
    try {
      const response = await authAPI.login(data);
      if (response.error) {
        Toast.show({
          type: "error",
          text1: "Error",
          text2: response.message,
        });
      } else {
        Toast.show({
          type: "success",
          text1: "Success",
          text2: "Login Successful",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.secondary,
        paddingHorizontal: SIZES.marginOrPadding.large,
      }}
    >
      <Toast config={toastConfig} />
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
        }}
      >
        <KeyboardAvoidingView>
          <View style={styles.loginTextContainer}>
            <ThemeText size={35} fontWeight={"bold"}>
              Login
            </ThemeText>
            <ThemeText size={18} style={styles.subText}>
              Hi! Welcome back, you have been missed.
            </ThemeText>
          </View>

          <FormProvider {...methods}>
            <FormFieldRenderer requiredFields={requiredFields} />
            <View
              style={{
                marginTop: SIZES.marginOrPadding.large,
              }}
            >
              <PrimaryRoundedButton
                title="Login"
                onPress={handleSubmit(onSubmit)}
              />
            </View>
          </FormProvider>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  loginTextContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 60,
  },
  subText: {
    width: "80%",
    textAlign: "center",
    lineHeight: 25,
    marginVertical: SIZES.marginOrPadding.medium,
  },
});
