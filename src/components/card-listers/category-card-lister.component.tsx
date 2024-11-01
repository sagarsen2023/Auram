import { StyleSheet, View } from "react-native";
import React from "react";
import { CategoryItem } from "@/src/models/categories-and-items/category.model";
import CategoryRoundedCard from "../cards/category-rounded-card.component";

import NotFoundText from "../not-found-text.xomponent";
import { SIZES } from "@/src/constants/theme";

const CategoryCardLister = ({ categories }: { categories: CategoryItem[] }) => {
  if (categories.length === 0) {
    return <NotFoundText title="No categories found" />;
  }

  return (
    <View style={styles.container}>
      {categories.map((category, index) => (
        <CategoryRoundedCard key={index} category={category} />
      ))}
    </View>
  );
};

export default CategoryCardLister;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 20,
    marginTop: SIZES.marginOrPadding.default,
    marginHorizontal: SIZES.marginOrPadding.default,
  },
});
