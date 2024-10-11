import React, { useState } from "react";
import FormFieldRenderer, {
  RequiredFieldsType,
} from "@/src/components/form-field-renderer.component";
import ThemeText from "@/src/components/theme-text.component";
import { SIZES, useThemeColor } from "@/src/constants/theme";
import {
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import PrimaryRoundedButton from "@/src/components/primary-rounded-button.component";
import OrSeparator from "@/src/components/or-separator";
import { router } from "expo-router";
import {
  signUpValidator,
  SignUpValidatorType,
} from "@/src/validators/auth.validator";
import authAPI from "@/src/services/auth.service";
import ThemeModal from "@/src/components/theme-modal";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import toastConfig from "@/src/components/toast.config";
import Toast from "react-native-toast-message";

export default function SignUp() {
  const COLORS = useThemeColor();
  const [isLoading, setIsLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

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
      if (response.error) {
        Toast.show({
          type: "error",
          text1: "Error while registering",
          text2: response.message,
        });
        return;
      }
      setModalVisible(true);
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
      <ThemeModal
        isModalVisible={modalVisible}
        setIsModalVisible={setModalVisible}
        onModalClose={() => {
          router.back();
        }}
      >
        <View style={styles.modalContent}>
          <MaterialIcons name="cloud-done" size={100} color={COLORS.primary} />
          <ThemeText size={25} fontWeight={"bold"}>
            Registration Successful 🎉
          </ThemeText>
          <ThemeText size={SIZES.fontSize.medium} style={styles.subText}>
            Your account has been created successfully. Please login to
            continue.
          </ThemeText>
          <PrimaryRoundedButton
            title="Close"
            buttonStyle={{
              width: "100%",
            }}
            onPress={() => router.back()}
          />
        </View>
      </ThemeModal>
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
      >
        <KeyboardAvoidingView style={styles.contentWrapper}>
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
            <View style={styles.buttonContainer}>
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
  modalContent: { alignItems: "center", justifyContent: "center" },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
  },
  contentWrapper: {
    paddingBottom: SIZES.marginOrPadding.large,
  },
  loginWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: SIZES.marginOrPadding.small,
  },
  buttonContainer: {
    marginTop: SIZES.marginOrPadding.large,
    marginBottom: SIZES.marginOrPadding.medium,
  },
});
