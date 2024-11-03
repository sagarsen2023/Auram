import React from "react";
import { View, StyleSheet, ViewStyle, DimensionValue } from "react-native";
import { ShimmerEffect } from "./shimmer-effect.component";
import { useThemeColor } from "@/src/constants/theme";

interface ShimmerContainerProps {
  width?: DimensionValue;
  height?: DimensionValue;
  borderRadius?: number;
  style?: ViewStyle;
}

export const ShimmerContainer = ({
  width = "100%",
  height = "100%",
  borderRadius = 4,
  style,
}: ShimmerContainerProps) => {
  const COLORS = useThemeColor();

  return (
    <View
      style={[
        styles.container,
        {
          width,
          height,
          borderRadius,
          backgroundColor: COLORS.shimmerLoaderColor,
        },
        style,
      ]}
    >
      <ShimmerEffect />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
  },
});
