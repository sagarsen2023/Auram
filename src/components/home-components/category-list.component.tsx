import {
  FlatList,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";
import { CategoryItem } from "@/src/models/categories-and-items/category.model";
import CategoryRoundedCard from "../cards/category-rounded-card.component";
import ThemeText from "../theme-text.component";
import { SIZES, useThemeColor } from "@/src/constants/theme";

// TODO: Implement onPress for category
// TODO: Implement See All functionality

const CategoryList = ({
  categories,
}: {
  categories: CategoryItem[] | null;
}) => {
  const COLORS = useThemeColor();
  return (
    <View>
      {categories && (
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <ThemeText style={styles.headingStyle}>Categories</ThemeText>
            <ThemeText
              style={{
                color: COLORS.primary,
                fontWeight: "bold",
              }}
            >
              See All
            </ThemeText>
          </View>

          <FlatList
            data={categories}
            keyExtractor={(item) => item._id}
            renderItem={(item) => (
              <TouchableWithoutFeedback
                onPress={() => {
                  console.log("Category Clicked");
                }}
              >
                <CategoryRoundedCard category={item.item} />
              </TouchableWithoutFeedback>
            )}
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
