import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useThemeColor } from "../constants/theme";

const PageIndicator = () => {
  const COLORS = useThemeColor();
  return (
    <View
      style={[
        styles.indicationContainer,
        {
          backgroundColor: COLORS.secondary,
        },
      ]}
    >
      <ActivityIndicator color={COLORS.primary} size={"large"} />
    </View>
  );
};

export default PageIndicator;

const styles = StyleSheet.create({
  indicationContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
