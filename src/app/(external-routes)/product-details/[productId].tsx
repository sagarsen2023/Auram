import { StyleSheet, View, Platform, Animated } from "react-native";
import React, { useEffect, useRef } from "react";
import { useLocalSearchParams } from "expo-router";
import { Product } from "@/src/models/categories-and-items/item.model.ts";
import { StatusBar } from "expo-status-bar";
import SecondaryBackButton from "@/src/components/buttons/secondary-back-button.component";
import { SIZES, useThemeColor } from "@/src/constants/theme";
import ThemeText from "@/src/components/theme-text.component";
import WishListButton from "@/src/components/buttons/wishlist-button.component";
import { WebView, WebViewMessageEvent } from "react-native-webview";
import htmlContentGenerator, {
  useWebViewHeight,
} from "@/src/utils/htmlContentGenerator";
import priceFormatter from "@/src/utils/priceFormatter";
import Badge from "@/src/components/badge.component";
import StoneDetailsCardLister from "@/src/components/card-listers/stone-details-card-lister.component";
import PrimaryRoundedButton from "@/src/components/buttons/primary-rounded-button.component";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import ImageContainer from "@/src/components/product-detail-components/image-comtainer.component";

const ProductDetails = () => {
  const COLORS = useThemeColor();
  const { productId } = useLocalSearchParams();
  const [webViewHeight, handleWebViewMessage] = useWebViewHeight() as [
    number,
    (event: WebViewMessageEvent) => void
  ];
  const scrollY = useRef(new Animated.Value(0)).current;
  const backgroundColorAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    scrollY.addListener(({ value }) => {
      Animated.timing(backgroundColorAnim, {
        toValue: value > 50 ? 1 : 0,
        duration: 100,
        useNativeDriver: false,
      }).start();
    });
    return () => scrollY.removeAllListeners();
  }, []);

  // ! Remove this line
  console.log(productId);

  const backgroundColor = backgroundColorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["transparent", COLORS.secondary],
  });

  const sampleData: Product = {
    _id: "66a5127b25a35d1aecd66801",
    itemName: "Bedazzled Diamond `Ring",
    itemDescription:
      "<p>Make an elegant style statement with this beautiful 18k gold 1.37 carat diamond ring. This masterpiece is the result of hardwork of our karigars. Flaunt it and be it in the spotlight.</p>\n",
    itemCategory: {
      status: false,
      _id: "6615a3211ff46d588eca9efb",
      title: "Rings",
      media: {
        _id: "670f3a7a52ed2a4d077569b9",
        originalname: "wedding.png",
        encoding: "7bit",
        mimetype: "image/png",
        size: 823513,
        path: "uploads/2024/10/fb6ec31d-8741-4526-9c8e-e8449a7605d6.webp",
        createdAt: "2024-10-16T04:00:58.676Z",
        updatedAt: "2024-10-16T04:00:58.676Z",
      },
      createdBy: "65f85e8cfe496281d5a43755",
      createdAt: "2024-04-09T20:20:49.877Z",
      updatedAt: "2024-07-16T09:40:31.788Z",
      updatedBy: "65f85e8cfe496281d5a43755",
    },
    itemMedia: [
      {
        _id: "670f3a6052ed2a4d077569af",
        originalname: "11.png",
        encoding: "7bit",
        mimetype: "image/png",
        size: 491324,
        path: "uploads/2024/10/d2fc6115-102a-4b4d-b984-c76a1912fd92.webp",
        createdAt: "2024-10-16T04:00:32.659Z",
        updatedAt: "2024-10-16T04:00:32.659Z",
      },
      {
        _id: "670f3a7a52ed2a4d077569b9",
        originalname: "wedding.png",
        encoding: "7bit",
        mimetype: "image/png",
        size: 823513,
        path: "uploads/2024/10/fb6ec31d-8741-4526-9c8e-e8449a7605d6.webp",
        createdAt: "2024-10-16T04:00:58.676Z",
        updatedAt: "2024-10-16T04:00:58.676Z",
      },
    ],
    thumbnail: {
      _id: "670f3a3a52ed2a4d077569a7",
      originalname: "1.png",
      encoding: "7bit",
      mimetype: "image/png",
      size: 177561,
      path: "uploads/2024/10/0d36b20a-c511-4459-a51d-4db78d751b06.webp",
      createdAt: "2024-10-16T03:59:54.905Z",
      updatedAt: "2024-10-16T03:59:54.905Z",
    },
    goldPurity: "18",
    itemSpecification:
      "<p><strong><em>BRAND: AURAM</em></strong></p>\n\n<p><strong><em>OCCASSION: CONTEMPORARY AND WEDDING</em></strong></p>\n",
    height: "2",
    width: "5",
    makingCharge: 5700,
    itemSKU: "add",
    slug: "abc123456",
    gender: "female",
    stoneDetails: [
      {
        _id: "670f3a9752ed2a4d077569ec",
        type: "diamond",
        weight: ".60",
        amount: 54000,
        description: "<p>diamond clarity vs/ e-f/ exel cut</p>",
      },
      {
        _id: "670f3a9752ed2a4d077569ed",
        type: "others",
        weight: "2",
        amount: 5400,
        description: "<p>fdfdfdfd</p>",
      },
    ],
    collections: [
      {
        textColor: "black",
        status: true,
        _id: "6678765d16bbcf7a02441990",
        title: "LIFE STYLE",
        description: "<p>LIFE STYLE</p>\n",
        slug: "life-style",
        colorCode: "#ede5f3",
        createdBy: "65f85e8cfe496281d5a43755",
        createdAt: "2024-06-23T19:24:13.727Z",
        updatedAt: "2024-10-16T01:52:15.663Z",
        updatedBy: "65f85e8cfe496281d5a43755",
      },
    ],
    metalType: "gold",
    itemWeight: 4,
    withGstPrice: 128853,
    withoutGstPrice: 125100,
    finalPrice: 128853,
    metalRateDetails: {
      _id: "670ffbaa52ed2a4d07757852",
      metalDetails: "gold 18 karat",
      rate: 15000,
    },
    hoverImage: {
      _id: "670f3a5752ed2a4d077569ab",
      originalname: "lit_v.png",
      encoding: "7bit",
      mimetype: "image/png",
      size: 1586340,
      path: "uploads/2024/10/b041643e-6b49-4130-bf46-5090307f703d.webp",
      createdAt: "2024-10-16T04:00:23.544Z",
      updatedAt: "2024-10-16T04:00:23.544Z",
    },
    grossWeight: 4.12,
    isFeatured: false,
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: COLORS.secondary,
        },
      ]}
    >
      {/* Top Navigation Part */}
      <Animated.View
        style={[styles.topNavigationContainer, { backgroundColor }]}
      >
        <SecondaryBackButton style={styles.buttonStyle} />
        <ThemeText style={styles.headerText}>Product Details</ThemeText>
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
          thumbnail={sampleData.thumbnail?.path}
          allImages={sampleData.itemMedia?.map((item) => item.path)}
        />

        {/* Product Details Part */}
        <View style={[styles.descriptionContainer]}>
          <ThemeText size={SIZES.fontSize.small}>
            {sampleData.itemCategory?.title}
          </ThemeText>

          <View style={styles.itemNameContainer}>
            <ThemeText style={styles.itemName}>{sampleData.itemName}</ThemeText>
            {sampleData.gender && (
              <Badge>
                <ThemeText style={styles.badgeText}>
                  {sampleData.gender.toLocaleUpperCase()}
                </ThemeText>
              </Badge>
            )}
          </View>

          {sampleData.itemDescription && (
            <View>
              <ThemeText style={styles.subHeaderText}>
                Product Details
              </ThemeText>
              <WebView
                style={{ height: webViewHeight + 20 }}
                originWhitelist={["*"]}
                source={{
                  html: htmlContentGenerator({
                    htmlContent: sampleData.itemDescription,
                    fontSizeInPx: SIZES.fontSize.small,
                    backgroundColor: COLORS.secondary,
                    textColor: COLORS.text,
                  }),
                }}
                onMessage={handleWebViewMessage}
                javaScriptEnabled
              />
            </View>
          )}
          {sampleData.itemSpecification && (
            <View>
              <ThemeText style={styles.subHeaderText}>
                Product Specifications
              </ThemeText>
              <WebView
                style={{ height: webViewHeight }}
                originWhitelist={["*"]}
                source={{
                  html: htmlContentGenerator({
                    htmlContent: sampleData.itemSpecification,
                    fontSizeInPx: SIZES.fontSize.small,
                    backgroundColor: COLORS.secondary,
                    textColor: COLORS.text,
                  }),
                }}
                onMessage={handleWebViewMessage}
                javaScriptEnabled
              />
            </View>
          )}
          {/* Making charges and gold purity */}
          <View style={styles.purityAndMakingChargeContainer}>
            {!!sampleData.makingCharge && (
              <ThemeText
                type="Primary"
                fontWeight={"500"}
                size={SIZES.fontSize.medium}
              >
                Making Charge: {priceFormatter(sampleData.makingCharge)}
              </ThemeText>
            )}
            {!!sampleData.goldPurity && (
              <Badge>
                <ThemeText style={styles.badgeText}>
                  Gold Purity: {sampleData.goldPurity}K
                </ThemeText>
              </Badge>
            )}
          </View>

          {/* Stone details */}
          <StoneDetailsCardLister stoneDetailsList={sampleData.stoneDetails} />
        </View>
      </Animated.ScrollView>

      {/* Bottom Add to Cart part */}
      <View
        style={[
          styles.addToCartContainer,
          {
            backgroundColor: COLORS.secondary,
            borderTopColor: COLORS.text,
            shadowColor: COLORS.text,
          },
        ]}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            gap: SIZES.marginOrPadding.xLarge,
          }}
        >
          <View
            style={{
              gap: SIZES.marginOrPadding.xSmall,
            }}
          >
            <ThemeText size={SIZES.fontSize.medium}>Final Price</ThemeText>
            <ThemeText size={SIZES.fontSize.large} fontWeight={"bold"}>
              {priceFormatter(sampleData.finalPrice)}
            </ThemeText>
          </View>

          <PrimaryRoundedButton
            buttonStyle={{
              flexDirection: "row",
              paddingHorizontal: SIZES.marginOrPadding.xLarge,
            }}
          >
            <FontAwesome6 name="bag-shopping" size={24} color="white" />
            <ThemeText
              size={SIZES.fontSize.xLarge}
              style={{
                color: "white",
                marginLeft: SIZES.marginOrPadding.small,
              }}
            >
              Add to Cart
            </ThemeText>
          </PrimaryRoundedButton>
        </View>
      </View>

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
  purityAndMakingChargeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: SIZES.marginOrPadding.medium,
  },
  addToCartContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingTop: SIZES.marginOrPadding.default,
    paddingHorizontal: SIZES.marginOrPadding.xLarge,
    paddingBottom: Platform.OS === "ios" ? 30 : 15,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderWidth: Platform.OS === "ios" ? 0 : 0.4,
    shadowOffset: { width: 0, height: -5 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    zIndex: 100,
  },
});
