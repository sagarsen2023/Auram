import React from "react";
import { Image, Text, StyleSheet, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useThemeColor } from "@/src/constants/theme";
import PrimaryRoundedButton from "@/src/components/primary-rounded-button.component";
import { Link, router } from "expo-router";

const Welcome = () => {
  const COLORS = useThemeColor();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    imageContainer: {
      maxWidth: "100%",
      height: 520,
    },
    textWrapper: {
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 25,
    },
    headingText: {
      fontSize: 35,
      fontWeight: "bold",
      letterSpacing: 2,
      color: COLORS.text
    },
    subText: {
      fontSize: 16,
      lineHeight: 25,
      marginVertical: 15,
      textAlign: "center",
      color: COLORS.text
    },
  });

  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: COLORS.secondary
    }}>
      <ScrollView>
        <View style={styles.container}>
          {/* ON boarding Image */}
          <Image
            source={require("@/src/assets/images/onboarding/onnoardingImage1.png")}
            style={styles.imageContainer}
            resizeMode="cover"
          />
          {/* Heading text and Sub text */}
          <View style={styles.textWrapper}>
            <Text style={styles.headingText}>
              Crafted by <Text style={{ color: COLORS.primary }}>You</Text>
            </Text>
            <Text style={styles.headingText}>
              Handpicked by <Text style={{ color: COLORS.primary }}>Us</Text>
            </Text>

            <Text style={styles.subText}>
              Aurum creates jewelry that's not just art, but a reflection of
              you. Combining heritage with your style, each piece feels uniquely
              yours.
            </Text>
          </View>
          {/* Get started button */}
          <View
            style={{
              marginTop: 15,
              paddingHorizontal: 25,
            }}
          >
            <PrimaryRoundedButton
              title="Get Started"
              onPress={() => {
                router.push("/onboarding");
              }}
            />
          </View>
          {/* Have an account redirection */}
          <View>
            <Text
              style={{
                textAlign: "center",
                marginVertical: 20,
                fontSize: 20,
                color: COLORS.text,
              }}
            >
              Already have an account?{" "}
              <Link
                href={"/(auth)/login"}
                replace
                style={{
                  fontWeight: "bold",
                  color: COLORS.primary,
                  textDecorationLine: "underline",
                }}
              >
                Login
              </Link>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Welcome;
