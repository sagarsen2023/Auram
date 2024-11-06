import { StyleSheet, ViewStyle } from "react-native";
import React from "react";
import SecondaryRoundedButton from "./secondary-rounded-button.component";
import { useThemeColor } from "@/src/constants/theme";
import { router } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";

const WishListButton = ({ style }: { style?: ViewStyle }) => {
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
      <AntDesign name="hearto" size={20} color={COLORS.text} />
    </SecondaryRoundedButton>
  );
};

export default WishListButton;

const styles = StyleSheet.create({
  buttonStyle: {
    padding: 7,
    borderWidth: 0.3,
  },
});
