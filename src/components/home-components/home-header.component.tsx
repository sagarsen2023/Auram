import { StyleSheet, View, TouchableOpacity, Touchable } from "react-native";
import ThemeText from "../theme-text.component";
import { SIZES, useThemeColor } from "@/src/constants/theme";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState, useEffect } from "react";
import { getUserName } from "@/src/hooks/username";
import { router } from "expo-router";

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
    <TouchableOpacity
      style={styles.headerRightContentWrapper}
      onPress={() => router.replace("/(home)/")}
    >
      <Ionicons name="reload-circle" size={30} color={COLORS.primary} />
    </TouchableOpacity>
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
