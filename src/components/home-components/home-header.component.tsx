import { StyleSheet, View } from "react-native";
import React from "react";
import ThemeText from "../theme-text.component";
import { SIZES, useThemeColor } from "@/src/constants/theme";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState, useEffect } from "react";
import { getUserName } from "@/src/hooks/username";

export const HeaderLeftContent = () => {
  const [username, setUsername] = useState<string>("");
  const COLORS = useThemeColor();
  useEffect(() => {
    getUserName().then((name) => setUsername(name ? name : ""));
  }, []);

  return (
    <View style={styles.headerLeftContentWrapper}>
      <ThemeText
        style={[
          styles.headerLeftText,
          {
            color: COLORS.primary,
          },
        ]}
      >
        Welcome {username}
      </ThemeText>
    </View>
  );
};

export const HeaderRightContent = () => {
  const COLORS = useThemeColor();
  return (
    <View style={styles.headerRightContentWrapper}>
      <Ionicons name="notifications" size={30} color={COLORS.primary} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerLeftContentWrapper: {
    // marginLeft: SIZES.marginOrPadding.default,
  },
  headerLeftText: {
    fontSize: SIZES.fontSize.xLarge,
    fontWeight: "600",
  },
  headerRightContentWrapper: {
    // marginRight: SIZES.marginOrPadding.default,
  },
});
