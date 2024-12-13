import { StyleSheet, View, Platform, Animated, Text } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { Product } from "@/src/models/categories-and-items/product.model.ts";
import { StatusBar } from "expo-status-bar";
import SecondaryBackButton from "@/src/components/buttons/secondary-back-button.component";
import { SIZES, useThemeColor } from "@/src/constants/theme";
import ThemeText from "@/src/components/theme-text.component";
import WishListButton from "@/src/components/buttons/wishlist-button.component";
import Badge from "@/src/components/badge.component";
import StoneDetailsCardLister from "@/src/components/card-listers/stone-details-card-lister.component";
import ImageContainer from "@/src/components/product-detail-components/image-container.component";
import MakingChargesAndGoldPurity from "@/src/components/product-detail-components/making-charges-and-gold-purity.component";
import ProductDetailsAndSpecifications from "@/src/components/product-detail-components/product-details-and-specifications.component";
import AddToCartSection from "@/src/components/product-detail-components/add-to-cart-section.component";
import { productAPI } from "@/src/services/product.service";
import Toast from "react-native-toast-message";
import toastConfig from "@/src/components/toast.config";
import PageIndicator from "@/src/components/page-indicator.component";

const ProductDetails = () => {
  const COLORS = useThemeColor();
  const { productId } = useLocalSearchParams();
  const scrollY = useRef(new Animated.Value(0)).current;
  const backgroundColorAnim = useRef(new Animated.Value(0)).current;
  const [loading, setLoading] = useState(true);
  const [productData, setProductData] = useState<Product | null>(null);

  const getProductDetails = async () => {
    try {
      const response = await productAPI.getProductDetails(productId.toString());
      if (response.status) {
        setProductData(response.data);
      }
    } catch {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Something went wrong",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    scrollY.addListener(({ value }) => {
      Animated.timing(backgroundColorAnim, {
        toValue: value > 50 ? 1 : 0,
        duration: 100,
        useNativeDriver: false,
      }).start();
    });
    getProductDetails();
    return () => scrollY.removeAllListeners();
  }, []);

  const backgroundColor = backgroundColorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["transparent", COLORS.secondary],
  });

  if (loading) {
    return <PageIndicator />;
  }

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
      {/* Top Navigation Part */}
      <Animated.View
        style={[styles.topNavigationContainer, { backgroundColor }]}
      >
        <SecondaryBackButton style={styles.buttonStyle} />
        <Text style={styles.headerText}>Product Details</Text>
        <WishListButton style={styles.buttonStyle} />
      </Animated.View>

      {/* Product Details Part */}
      <Animated.ScrollView
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={20}
        contentContainerStyle={styles.scrollView}
      >
        {/* Top Image Part */}
        <ImageContainer
          thumbnail={productData?.thumbnail?.path}
          allImages={productData?.itemMedia?.map((item) => item.path)}
        />

        {/* Product Details Part */}
        <View style={[styles.descriptionContainer]}>
          <ThemeText size={SIZES.fontSize.small}>
            {productData?.itemCategory?.title}
          </ThemeText>

          <View style={styles.itemNameContainer}>
            <ThemeText style={styles.itemName}>
              {productData?.itemName}
            </ThemeText>
            {productData?.gender && (
              <Badge>
                <ThemeText style={styles.badgeText}>
                  {productData?.gender.toLocaleUpperCase()}
                </ThemeText>
              </Badge>
            )}
          </View>

          <ProductDetailsAndSpecifications
            description={productData?.itemDescription}
            specification={productData?.itemSpecification}
          />

          {/* Making charges and gold purity */}
          <MakingChargesAndGoldPurity
            goldPurity={productData?.goldPurity}
            makingCharge={productData?.makingCharge}
          />

          {/* Stone details */}
          <StoneDetailsCardLister
            stoneDetailsList={productData?.stoneDetails}
          />
        </View>
      </Animated.ScrollView>

      {/* Bottom Add to Cart part */}
      <AddToCartSection finalPrice={productData?.finalPrice} />

      <StatusBar animated style="auto" />
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
  },
  buttonStyle: {
    padding: SIZES.marginOrPadding.medium,
    borderWidth: 0.3,
  },
  headerText: {
    fontSize: SIZES.fontSize.large,
    fontWeight: "bold",
    color: "inherit",
    backgroundColor: "inherit",
  },
  topNavigationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    left: 0,
    right: 0,
    zIndex: 100,
    paddingTop: Platform.OS === "ios" ? 60 : 40,
    paddingHorizontal: SIZES.marginOrPadding.default,
    paddingBottom: SIZES.marginOrPadding.medium,
  },
  scrollView: {
    flexGrow: 1,
  },
  descriptionContainer: {
    flex: 1,
    paddingHorizontal: SIZES.marginOrPadding.default,
    marginTop: -SIZES.marginOrPadding.medium,
    paddingBottom: 120,
  },
  itemNameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: SIZES.marginOrPadding.medium,
  },
  itemName: {
    fontSize: SIZES.fontSize.xLarge,
    fontWeight: "bold",
  },
  subHeaderText: {
    fontSize: SIZES.fontSize.large,
    fontWeight: "600",
    marginTop: SIZES.marginOrPadding.medium,
    marginBottom: SIZES.marginOrPadding.small,
  },
  badgeText: {
    color: "white",
  },
});
