import { StyleSheet } from "react-native";
import React from "react";
import SecondaryRoundedButton from "./secondary-rounded-button.component";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useThemeColor } from "@/src/constants/theme";
import { router } from "expo-router";

const SecondaryBackButton = () => {
  const COLORS = useThemeColor();
  return (
    <SecondaryRoundedButton
      buttonStyle={[
        styles.buttonStyle,
        {
          backgroundColor: COLORS.secondary,
        },
      ]}
      onPress={() => router.back()}
    >
      <Ionicons name="chevron-back" size={20} color={COLORS.text} />
    </SecondaryRoundedButton>
  );
};

export default SecondaryBackButton;

const styles = StyleSheet.create({
  buttonStyle: {
    padding: 7,
    borderWidth: 0.3,
  },
});
