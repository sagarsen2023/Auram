import { View, StyleSheet, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import { SIZES, useThemeColor } from "@/src/constants/theme";
import ThemeText from "@/src/components/theme-text.component";
import ThemeTextInput from "@/src/components/forms-inputs/theme-text-input.component";
import PrimaryRoundedButton from "@/src/components/buttons/primary-rounded-button.component";
import OrSeparator from "@/src/components/or-separator";
import { Link ,router} from "expo-router";
import { setUserName } from "@/src/hooks/username";

const AuthTypeSelector = () => {
  const COLORS = useThemeColor();
  const [currentUsername, setCurrentUsername] = useState("");

  const saveUsername = () => {
    if (currentUsername) {
      setUserName(currentUsername);
      router.replace("/(home)/");
    }
  };

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor: COLORS.secondary,
        },
      ]}
    >
      <ScrollView>
        <View style={styles.wrapper}>
          {/* Image Part */}
          <Image
            source={require("@/src/assets/images/onboarding/onboardingImage1.png")}
            style={styles.imageContainer}
            resizeMode="cover"
          />
          <View style={styles.contentWrapper}>
            <View style={styles.textContainer}>
              <ThemeText size={35} fontWeight={"bold"}>
                Let's get started!
              </ThemeText>
              <ThemeText style={styles.description}>
                We don't need your email or password to get started. Just your
                name only...
              </ThemeText>
            </View>

            <ThemeTextInput
              label="May we know your name?"
              onChange={(e) => setCurrentUsername(e)}
              placeHolder="Enter your name"
            />

            <View style={styles.buttonContainer}>
              <Link href={"/(home)/"} replace>
                <ThemeText type="Primary">
                  I'll do it later
                </ThemeText>
              </Link>
              <PrimaryRoundedButton
                buttonStyle={styles.buttonStyle}
                title="Save"
                onPress={saveUsername}
              />
            </View>
            <OrSeparator text="Admin Login" />
            <View style={styles.adminLoginContainer}>
              <ThemeText>Want to login as an admin? </ThemeText>
              <Link href={"/(auth)/login"}>
                <ThemeText style={{ color: COLORS.primary }}>
                  Login here
                </ThemeText>
              </Link>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AuthTypeSelector;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    maxWidth: "100%",
    height: 420,
  },
  wrapper: {
    flex: 1,
    justifyContent: "center",
  },
  contentWrapper: {
    marginTop: SIZES.marginOrPadding.default,
    marginHorizontal: SIZES.marginOrPadding.xLarge,
  },
  textContainer: {
    alignItems: "center",
    marginBottom: SIZES.marginOrPadding.medium,
  },
  description: {
    fontSize: SIZES.fontSize.medium,
    textAlign: "center",
    marginVertical: SIZES.marginOrPadding.medium,
    width: "80%",
  },
  buttonContainer: {
    marginVertical: SIZES.marginOrPadding.medium,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonStyle: {
    width: "45%",
    height: 50,
    paddingVertical: SIZES.marginOrPadding.medium,
  },
  adminLoginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: SIZES.marginOrPadding.small,
  },
});
