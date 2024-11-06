import { StyleSheet, View } from "react-native";
import React from "react";
import ThemeText from "../theme-text.component";
import { SIZES } from "@/src/constants/theme";
import Badge from "../badge.component";
import priceFormatter from "@/src/utils/priceFormatter";

const MakingChargesAndGoldPurity = ({
  makingCharge,
  goldPurity,
}: {
  makingCharge?: number;
  goldPurity?: string;
}) => {
  return (
    <View style={styles.purityAndMakingChargeContainer}>
      {makingCharge && (
        <ThemeText
          type="Primary"
          fontWeight={"500"}
          size={SIZES.fontSize.medium}
        >
          Making Charge: {priceFormatter(makingCharge)}
        </ThemeText>
      )}
      {goldPurity && (
        <Badge>
          <ThemeText style={styles.badgeText}>
            Gold Purity: {goldPurity}K
          </ThemeText>
        </Badge>
      )}
    </View>
  );
};

export default MakingChargesAndGoldPurity;

const styles = StyleSheet.create({
  purityAndMakingChargeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: SIZES.marginOrPadding.medium,
  },
  badgeText: {
    color: "white",
  },
});
