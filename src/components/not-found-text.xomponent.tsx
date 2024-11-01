import { StyleSheet, View } from "react-native";
import React from "react";
import ThemeText from "./theme-text.component";
import { SIZES, useThemeColor } from "../constants/theme";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const NotFoundText = ({ title }: { title: string }) => {
  const COLORS = useThemeColor();
  return (
    <View style={styles.container}>
      <MaterialIcons name="info-outline" size={24} color={COLORS.error} />
      <ThemeText
        style={{
          color: COLORS.error,
          fontSize: SIZES.fontSize.medium,
        }}
      >
        {title}
      </ThemeText>
    </View>
  );
};

export default NotFoundText;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30
  },
});
