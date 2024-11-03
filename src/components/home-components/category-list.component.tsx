import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import { CategoryItem } from "@/src/models/categories-and-items/category.model";
import CategoryRoundedCard from "../cards/category-rounded-card.component";
import ThemeText from "../theme-text.component";
import { SIZES, useThemeColor } from "@/src/constants/theme";
import { Link } from "expo-router";
import CategoryRoundedCardLoader from "../shimmer-loaders/category-rounded-card-loader.component";

const CategoryList = ({
  categories,
  loading,
  loaderCount,
}: {
  categories?: CategoryItem[];
  loading: boolean;
  loaderCount: number;
}) => {
  const COLORS = useThemeColor();
  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        {Array.from({ length: loaderCount }).map((_, index) => (
          <CategoryRoundedCardLoader key={index} />
        ))}
      </View>
    );
  }
  return (
    <View>
      {categories && (
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <ThemeText style={styles.headingStyle}>Categories</ThemeText>
            <Link href={"/(external-routes)/all-categories"} push>
              <ThemeText
                style={{
                  color: COLORS.primary,
                  fontWeight: "bold",
                }}
              >
                See All
              </ThemeText>
            </Link>
          </View>

          <FlatList
            data={categories}
            keyExtractor={(item) => item._id}
            renderItem={(item) => <CategoryRoundedCard category={item.item} />}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      )}
    </View>
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  loaderContainer: {
    flexDirection: "row",
    marginVertical: SIZES.marginOrPadding.default,
  },
  container: {
    marginVertical: SIZES.marginOrPadding.default,
  },
  headingStyle: {
    fontSize: SIZES.fontSize.large,
    fontWeight: "bold",
  },
  textContainer: {
    backgroundColor: "transparent",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: SIZES.marginOrPadding.medium,
  },
});
