import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { CategoryItem } from "@/src/models/categories-and-items/category.model";
import { SIZES, useThemeColor } from "@/src/constants/theme";
import imageValidator from "@/src/utils/imageValidator";
import ThemeText from "../theme-text.component";

const CategoryRoundedCard = ({ category }: { category: CategoryItem }) => {
  const COLORS = useThemeColor();
  return (
    <View style={styles.wrapper}>
      <View
        style={[
          styles.imageContainer,
          {
            backgroundColor: COLORS.primaryLite,
          },
        ]}
      >
        <Image
          style={styles.imageStyles}
          source={imageValidator(category.media.path)}
          resizeMode="cover"
        />
      </View>
      <ThemeText style={styles.title}>
        {category.title.length > 10
          ? `${category.title.slice(0, 10)}...`
          : category.title}
      </ThemeText>
    </View>
  );
};

export default CategoryRoundedCard;

const styles = StyleSheet.create({
  wrapper: {
    marginRight: SIZES.marginOrPadding.default,
    gap: SIZES.marginOrPadding.xSmall,
    alignItems: "center",
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    padding: SIZES.marginOrPadding.xSmall,
  },
  imageStyles: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },
  title: {
    fontWeight: "500",
  },
});
