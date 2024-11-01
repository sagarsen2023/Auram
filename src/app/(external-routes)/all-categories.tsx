import { StyleSheet, View, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import SearchBar from "@/src/components/search-bar.component";
import { SIZES, useThemeColor } from "@/src/constants/theme";
import { categoryAPI } from "@/src/services/product.service";
import { CategoryItem } from "@/src/models/categories-and-items/category.model";
import toastConfig from "@/src/components/toast.config";
import Toast from "react-native-toast-message";
import PageIndicator from "@/src/components/page-indicator.component";
import CategoryCardLister from "@/src/components/card-listers/category-card-lister.component";

const AllCategories = () => {
  const COLORS = useThemeColor();
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState<CategoryItem[]>([]);

  useEffect(() => {
    setLoading(true);
    categoryAPI
      .getAllCategories()
      .then((response) => setCategories(response.data))
      .catch((err) =>
        Toast.show({
          type: "error",
          text1: "Error fetching categories",
          text2: err.message,
        })
      )
      .finally(() => setLoading(false));
  }, []);

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: COLORS.secondary,
        },
      ]}
    >
      <Toast config={toastConfig} />
      <SearchBar />
      {loading ? (
        <PageIndicator />
      ) : (
        <ScrollView>
          <CategoryCardLister categories={categories} />
        </ScrollView>
      )}
    </View>
  );
};

export default AllCategories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: SIZES.marginOrPadding.xSmall,
  },
});
