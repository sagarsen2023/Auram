import { StyleSheet, View } from "react-native";
import React from "react";
import { Product } from "@/src/models/categories-and-items/featured-item.model.ts";
import MainProductCard from "../cards/main-product-card";
import ThemeText from "../theme-text.component";
import { SIZES } from "@/src/constants/theme";

const ProductListRenderer = ({
  title,
  products,
}: {
  title: string;
  products: Product[];
}) => {
  return (
    <View style={styles.container}>
      <ThemeText style={styles.title}>{title}</ThemeText>
      <View style={styles.contentWrapper}>
        {products.map((product) => (
          <MainProductCard key={product._id} product={product} />
        ))}
      </View>
    </View>
  );
};

export default ProductListRenderer;

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.marginOrPadding.medium,
  },
  title: {
    fontSize: SIZES.fontSize.large,
    marginBottom: SIZES.marginOrPadding.default,
    fontWeight: "bold", 
  },
  contentWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
