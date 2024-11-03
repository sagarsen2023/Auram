import { StyleSheet, View } from "react-native";
import React from "react";
import { Product } from "@/src/models/categories-and-items/featured-item.model.ts";
import MainProductCard from "../cards/main-product-card";
import ThemeText from "../theme-text.component";
import { SIZES } from "@/src/constants/theme";
import MainProductCardLoader from "../shimmer-loaders/main-product-card-loader.component";
import { ShimmerContainer } from "../shimmer-loaders/config/shimmer-effect-container.component";

const ProductList = ({
  title,
  products,
  loading,
  loaderCount,
}: {
  title: string;
  products: Product[] | null;
  loading: boolean;
  loaderCount: number;
}) => {
  if (loading)
    return (
      <>
        <View
          style={{
            marginBottom: SIZES.marginOrPadding.default,
            width: "40%",
          }}
        >
          <ShimmerContainer height={20} />
        </View>
        <View style={styles.contentWrapper}>
          {Array.from({ length: loaderCount }).map((_, index) => (
            <MainProductCardLoader key={index} />
          ))}
        </View>
      </>
    );
  if (!products) return null;
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

export default ProductList;

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
