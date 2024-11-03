import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { SIZES, useThemeColor } from "@/src/constants/theme";
import { ShimmerContainer } from "./shimmer-effect-container.component";

const width = Dimensions.get("window").width;

const BannerCardLoader = () => {
  const COLORS = useThemeColor();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: COLORS.primaryLite,
        },
      ]}
    >
      <View style={styles.wrapper}>
        <View style={styles.leftContent}>
          {/* Title shimmer */}
          <ShimmerContainer width="90%" height={28} borderRadius={4} />

          {/* Description shimmer - Two lines */}
          <View style={styles.descriptionContainer}>
            <ShimmerContainer
              width="100%"
              height={16}
              borderRadius={4}
              style={styles.descriptionLine}
            />
            <ShimmerContainer width="80%" height={16} borderRadius={4} />
          </View>

          {/* Button shimmer */}
          <ShimmerContainer
            width={120}
            height={40}
            borderRadius={10}
            style={styles.buttonStyle}
          />
        </View>

        {/* Image shimmer */}
        <ShimmerContainer
          width="40%"
          height={undefined}
          style={styles.image}
          borderRadius={20}
        />
      </View>
    </View>
  );
};

export default BannerCardLoader;

const styles = StyleSheet.create({
  container: {
    width: width - SIZES.marginOrPadding.default * 2,
    marginHorizontal: SIZES.marginOrPadding.default,
    padding: SIZES.marginOrPadding.default,
    borderRadius: 20,
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: SIZES.marginOrPadding.large,
  },
  image: {
    aspectRatio: 1,
  },
  leftContent: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  descriptionContainer: {
    width: "100%",
    marginTop: SIZES.marginOrPadding.xSmall,
  },
  descriptionLine: {
    marginBottom: SIZES.marginOrPadding.xSmall,
  },
  buttonStyle: {
    marginTop: SIZES.marginOrPadding.medium,
  },
});
