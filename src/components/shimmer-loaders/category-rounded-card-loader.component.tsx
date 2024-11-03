import React from "react";
import { StyleSheet, View } from "react-native";
import { SIZES } from "@/src/constants/theme";
import { ShimmerContainer } from "./config/shimmer-effect-container.component";

const CategoryRoundedCardLoader = () => {
  return (
    <View style={styles.wrapper}>
      <ShimmerContainer width={100} height={100} borderRadius={50} />
      <ShimmerContainer width={80} height={20} style={styles.titleLoader} />
    </View>
  );
};

export default CategoryRoundedCardLoader;

const styles = StyleSheet.create({
  wrapper: {
    marginRight: SIZES.marginOrPadding.default,
    gap: SIZES.marginOrPadding.xSmall,
    alignItems: "center",
  },
  titleLoader: {
    marginTop: SIZES.marginOrPadding.xSmall,
  },
});
