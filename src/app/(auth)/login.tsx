import FormFieldRenderer from "@/src/components/form-field-renderer.component";
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
import { RequiredFieldsType } from "@/src/components/form-field-renderer.component";

export default function Login() {
  const COLORS = useThemeColor();
  const methods = useForm();
  const { handleSubmit } = methods;
  const requiredFields: RequiredFieldsType = [
    {
      fieldName: "email",
      type: "text",
      placeHolder: "Enter your Email",
    },
    {
      fieldName: "password",
      type: "password",
      placeHolder: "Enter your Password",
    },
  ];

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.secondary,
      }}
    >
      <ScrollView>
        <KeyboardAvoidingView
          style={{ flex: 1, paddingHorizontal: SIZES.marginOrPadding.large }}
        >
          <View style={styles.loginContainer}>
            <ThemeText size={24} fontWeight={"bold"}>
              Login
            </ThemeText>
            <ThemeText size={18} style={styles.subText}>
              Hi! Welcome back, you have been missed.
            </ThemeText>
          </View>
          <View>
            <FormProvider {...methods}>
              <FormFieldRenderer requiredFields={requiredFields} />
              <PrimaryRoundedButton
                title="Login"
                onPress={handleSubmit((data) => {
                  console.log(data);
                })}
              />
            </FormProvider>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 70,
  },
  subText: {
    marginVertical: SIZES.marginOrPadding.medium,
  },
});
