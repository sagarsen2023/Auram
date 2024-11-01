import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const ProductDetails = () => {
  const { productId } = useLocalSearchParams();
  return (
    <View>
      <Text>{productId}</Text>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({});
