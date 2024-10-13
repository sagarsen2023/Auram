import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { CategoryItem } from "@/src/models/categories-and-items/category.model";

const CategoryList = ({
  categories,
}: {
  categories: CategoryItem[] | null;
}) => {
  return (
    <View>
      <Text>CategoryList</Text>
    </View>
  );
};

export default CategoryList;

const styles = StyleSheet.create({});
