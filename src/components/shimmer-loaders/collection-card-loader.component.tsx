import React from "react";
import { StyleSheet, View } from "react-native";
import { SIZES, useThemeColor } from "@/src/constants/theme";
import { ShimmerContainer } from "./config/shimmer-effect-container.component";

const CollectionCardLoader = () => {
  const COLORS = useThemeColor();

  return (
    <View style={styles.cardWrapper}>
      {/* Main image shimmer */}
      <ShimmerContainer
        width="100%"
        height={200}
        style={styles.imageStyle}
        borderRadius={SIZES.borderRadius.default}
      />

      {/* Text content overlay */}
      <View
        style={[
          styles.textContent,
          {
            backgroundColor: COLORS.primaryLite,
          },
        ]}
      >
        <ShimmerContainer width="80%" height={20} borderRadius={4} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardWrapper: {
    width: "48%",
    marginBottom: SIZES.marginOrPadding.default,
    borderRadius: SIZES.borderRadius.default,
    overflow: "hidden",
    position: "relative",
  },
  imageStyle: {
    aspectRatio: 1,
  },
  textContent: {
    position: "absolute",
    padding: SIZES.marginOrPadding.xSmall,
    width: "100%",
    bottom: 0,
    alignItems: "center",
    borderTopLeftRadius: SIZES.borderRadius.default,
    borderTopRightRadius: SIZES.borderRadius.default,
  },
});

export default CollectionCardLoader;
