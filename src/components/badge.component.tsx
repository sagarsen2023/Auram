import { StyleSheet, View } from "react-native";
import React from "react";
import { SIZES, useThemeColor } from "../constants/theme";

const Badge = ({
  children,
  type = "primary",
}: {
  children: React.ReactNode;

  type?: "primary" | "secondary" | "success" | "error";
}) => {
  const COLORS = useThemeColor();
  const badgeColor = COLORS[type];
  return (
    <View style={[styles.badge, { backgroundColor: badgeColor }]}>
      {children}
    </View>
  );
};

export default Badge;

const styles = StyleSheet.create({
  badge: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: SIZES.borderRadius.default,
  },
});
