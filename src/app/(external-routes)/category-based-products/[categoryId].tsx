import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const CategoryBasedProducts = () => {
  const { categoryId } = useLocalSearchParams();
  return (
    <View>
      <Text>{categoryId}</Text>
    </View>
  );
};

export default CategoryBasedProducts;

const styles = StyleSheet.create({});
