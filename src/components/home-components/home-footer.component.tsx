import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ThemeText from "../theme-text.component";
import { SIZES, useThemeColor } from "@/src/constants/theme";

const HomeFooter = () => {
  const COLORS = useThemeColor();
  return (
    <View style={styles.footerWrapper}>
      <ThemeText
        style={[
          styles.footerText,
          {
            color: COLORS.primaryLite,
          },
        ]}
      >
        Unleash Your Inner Sparkle
      </ThemeText>
    </View>
  );
};

export default HomeFooter;

const styles = StyleSheet.create({
  footerWrapper: {
    margin: SIZES.marginOrPadding.xLarge,
  },
  footerText: {
    fontSize: 50,
    textAlign: "center",
    fontWeight: "bold",
  },
});
