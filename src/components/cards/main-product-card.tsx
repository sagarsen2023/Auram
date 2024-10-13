import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { Product } from "@/src/models/categories-and-items/featured-item.model.ts";
import imageValidator from "@/src/utils/imageValidator";
import { SIZES } from "@/src/constants/theme";
import ThemeText from "../theme-text.component";
import priceFormatter from "@/src/utils/priceFormatter";

// TODO: Add product details navigation

const MainProductCard = ({ product }: { product: Product }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageStyle}
        source={imageValidator(product.thumbnail.path)}
      />
      <View>
        <ThemeText style={styles.itemName}>{product.itemName}</ThemeText>
        <ThemeText style={styles.itemPrice}>{priceFormatter(product.withGstPrice)}</ThemeText>
      </View>
    </View>
  );
};

export default MainProductCard;

const styles = StyleSheet.create({
  container: {
    width: "48%",
    marginBottom: SIZES.marginOrPadding.default,
  },
  imageStyle: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: SIZES.borderRadius.default,
  },
  itemName: {
    fontSize: SIZES.fontSize.large,
    marginTop: SIZES.marginOrPadding.small,
    fontWeight: "600",
  },
  itemPrice: {
    fontSize: SIZES.fontSize.medium,
    marginTop: SIZES.marginOrPadding.xSmall,
    fontWeight: "600",
    letterSpacing: 2,
  },
});
