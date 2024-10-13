import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SIZES, useThemeColor } from "@/src/constants/theme";
import imageValidator from "@/src/utils/imageValidator";
import { CollectionItem } from "@/src/models/categories-and-items/collection.model";
import ThemeText from "../theme-text.component";

const CollectionCard = ({ collection }: { collection: CollectionItem }) => {
  const COLORS = useThemeColor();
  return (
    <View style={styles.cardWrapper}>
      <Image
        style={styles.imageStyle}
        source={imageValidator(collection.horizontalImage.path)}
        resizeMode="cover"
      />
      <View
        style={[
          styles.textContent,
          {
            backgroundColor: COLORS.primaryLite,
          },
        ]}
      >
        <ThemeText style={styles.title}>{collection.title}</ThemeText>
      </View>
    </View>
  );
};

export default CollectionCard;

const styles = StyleSheet.create({
  cardWrapper: {
    width: "48%",
    marginBottom: SIZES.marginOrPadding.default,
    borderRadius: SIZES.borderRadius.default,
    overflow: "hidden",
    position: "relative",
  },
  imageStyle: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: SIZES.borderRadius.default,
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
  title: {
    fontSize: SIZES.fontSize.medium,
    fontWeight: "bold",
  },
});
