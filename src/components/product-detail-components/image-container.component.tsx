import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { SIZES, useThemeColor } from "@/src/constants/theme";
import imageValidator from "@/src/utils/imageValidator";

const ImageContainer = ({
  thumbnail,
  allImages,
}: {
  thumbnail?: string;
  allImages?: string[];
}) => {
  const COLORS = useThemeColor();
  return (
    <View style={styles.imageContainer}>
      <Image source={imageValidator(thumbnail)} style={styles.imageStyle} />
      {/* Rounded Part */}
      <View
        style={[
          styles.roundedPart,
          {
            backgroundColor: COLORS.secondary,
          },
        ]}
      />
    </View>
  );
};

export default ImageContainer;

const styles = StyleSheet.create({
  imageContainer: {
    position: "relative",
  },
  imageStyle: {
    width: "100%",
    height: 450,
  },
  roundedPart: {
    position: "absolute",
    width: "100%",
    height: SIZES.marginOrPadding.large,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    bottom: 0,
  },
});
