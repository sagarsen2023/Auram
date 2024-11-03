import {
  Image,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { Product } from "@/src/models/categories-and-items/item.model.ts";
import imageValidator from "@/src/utils/imageValidator";
import { SIZES } from "@/src/constants/theme";
import ThemeText from "../theme-text.component";
import priceFormatter from "@/src/utils/priceFormatter";
import { router } from "expo-router";

const MainProductCard = ({ product }: { product: Product }) => {
  const image = imageValidator(product.thumbnail?.path)

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        router.push(`/(external-routes)/product-details/${product._id}`);
      }}
    >
      <View style={styles.container}>
        {image && (
          <Image
            style={styles.imageStyle}
            source={image}
            resizeMode="cover"
          />
        )}
        <View>
          <ThemeText style={styles.itemName}>{product.itemName}</ThemeText>
          <ThemeText style={styles.itemPrice}>
            {priceFormatter(product?.withGstPrice)}
          </ThemeText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MainProductCard;

const styles = StyleSheet.create({
  container: {
    width: "48%",
    marginBottom: SIZES.marginOrPadding.default,
    overflow: "hidden",
    borderRadius: SIZES.borderRadius.default,
  },
  imageStyle: {
    width: "100%",
    height: "auto",
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
