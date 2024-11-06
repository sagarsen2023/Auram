import React from "react";
import { StyleSheet, View } from "react-native";
import { SIZES } from "@/src/constants/theme";
import { ShimmerContainer } from "./config/shimmer-effect-container.component";

const MainProductCardLoader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ShimmerContainer borderRadius={SIZES.borderRadius.default} />
      </View>

      <View style={styles.contentContainer}>
        <ShimmerContainer width="90%" height={20} />
        <ShimmerContainer
          width="60%"
          height={16}
          style={styles.pricePlaceholder}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "48%",
    marginBottom: SIZES.marginOrPadding.default,
  },
  imageContainer: {
    width: "100%",
    aspectRatio: 1,
  },
  contentContainer: {
    marginTop: SIZES.marginOrPadding.small,
  },
  pricePlaceholder: {
    marginTop: SIZES.marginOrPadding.xSmall,
  },
});

export default MainProductCardLoader;
