import { StyleSheet, ViewStyle } from "react-native";
import React from "react";
import SecondaryRoundedButton from "./secondary-rounded-button.component";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useThemeColor } from "@/src/constants/theme";
import { router } from "expo-router";

const SecondaryBackButton = ({ style }: { style?: ViewStyle }) => {
  const COLORS = useThemeColor();
  return (
    <SecondaryRoundedButton
      buttonStyle={[
        style || styles.buttonStyle,
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
