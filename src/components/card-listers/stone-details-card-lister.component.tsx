import { StyleSheet, View } from "react-native";
import React from "react";
import StoneDetailsCard from "../cards/stone-details-card.component";
import { StoneDetails } from "@/src/models/categories-and-items/item.model.ts";
import ThemeText from "../theme-text.component";
import { SIZES } from "@/src/constants/theme";

const StoneDetailsCardLister = ({
  stoneDetailsList,
}: {
  stoneDetailsList?: StoneDetails[];
}) => {
  if (!stoneDetailsList) {
    return null;
  }

  return (
    <>
      <ThemeText style={styles.headerText}>Stone Details</ThemeText>
      <View style={styles.container}>
        {stoneDetailsList.map((stoneDetails, index) => (
          <StoneDetailsCard key={index} stoneDetails={stoneDetails} />
        ))}
      </View>
    </>
  );
};

export default StoneDetailsCardLister;

const styles = StyleSheet.create({
  headerText: {
    fontSize: SIZES.fontSize.large,
    fontWeight: "bold",
    marginTop: SIZES.marginOrPadding.medium,
    marginBottom: SIZES.marginOrPadding.small,
  },
  container: {
    gap: SIZES.marginOrPadding.medium,
  },
});
