import { StyleSheet, View } from "react-native";
import React from "react";
import { useThemeColor } from "@/src/constants/theme";

const DotComponent = ({ active }: { active: boolean }) => {
  const COLOR = useThemeColor();
  return (
    <View
      style={[
        styles.dot,
        {
          backgroundColor: active ? COLOR.primary : COLOR.borderColor,
        },
      ]}
    />
  );
};

export default DotComponent;

const styles = StyleSheet.create({
  dot: {
    width: 10,
    height: 10,
    borderRadius: 50,
    marginHorizontal: 5,
  },
});
