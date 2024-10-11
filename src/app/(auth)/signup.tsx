import FormFieldRenderer, {
  RequiredFieldsType,
} from "@/src/components/form-field-renderer.component";
import ThemeText from "@/src/components/theme-text.component";
import toastConfig from "@/src/components/toast.config";
import { SIZES, useThemeColor } from "@/src/constants/theme";
import {
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import PrimaryRoundedButton from "@/src/components/primary-rounded-button.component";
import { useState } from "react";
import OrSeparator from "@/src/components/or-separator";
import { router } from "expo-router";
import {
  signUpValidator,
  SignUpValidatorType,
} from "@/src/validators/auth.validator";
import authAPI from "@/src/services/auth.service";

export default function SignUp() {
  const COLORS = useThemeColor();
  const [isLoading, setIsLoading] = useState(false);
  const requiredFields: RequiredFieldsType = [
    {
      fieldName: "name",
      type: "name",
      placeHolder: "Enter your name",
      label: "Name",
    },
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
  const methods = useForm<SignUpValidatorType>({
    resolver: zodResolver(signUpValidator),
  });
  const { handleSubmit } = methods;
  const onSubmit = async (data: SignUpValidatorType) => {
    try {
      setIsLoading(true);
      const response = await authAPI.register(data);
      console.log(response);
      if (response.error) {
        Toast.show({
          type: "error",
          text1: "Error",
          text2: response.errors?.email,
        });
      } else {
        Toast.show({
          type: "success",
          text1: "Account Created",
          text2: "Please login to continue",
        });
        router.back();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
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
          <View style={styles.signUpTextContainer}>
            <ThemeText size={35} fontWeight={"bold"}>
              Sign Up
            </ThemeText>
            <ThemeText size={18} style={styles.subText}>
              Fill in the details to get started.
            </ThemeText>
          </View>

          <FormProvider {...methods}>
            <FormFieldRenderer requiredFields={requiredFields} />
            <View
              style={{
                marginTop: SIZES.marginOrPadding.large,
                marginBottom: SIZES.marginOrPadding.medium,
              }}
            >
              <PrimaryRoundedButton
                title="SignUp"
                onPress={handleSubmit(onSubmit)}
                isLoading={isLoading}
              />
            </View>
          </FormProvider>
          <OrSeparator text="Have an account?" />
          <Pressable
            style={styles.loginWrapper}
            onPress={() => {
              router.back();
            }}
          >
            <ThemeText
              style={{
                fontSize: SIZES.fontSize.medium,
                color: COLORS.primary,
                textDecorationLine: "underline",
              }}
            >
              Log in
            </ThemeText>
          </Pressable>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  signUpTextContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 40,
  },
  subText: {
    width: "80%",
    textAlign: "center",
    lineHeight: 25,
    marginVertical: SIZES.marginOrPadding.medium,
  },
  loginWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: SIZES.marginOrPadding.small,
  },
});
