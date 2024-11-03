import { ScrollView, StyleSheet, Image, View, Platform } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { Product } from "@/src/models/categories-and-items/item.model.ts";
import imageValidator from "@/src/utils/imageValidator";
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

const ProductDetails = () => {
  const COLORS = useThemeColor();
  const { productId } = useLocalSearchParams();
  const [webViewHeight, handleWebViewMessage] = useWebViewHeight() as [
    number,
    (event: WebViewMessageEvent) => void
  ];
  console.log(productId);

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
        description: "<p>diamond clarity vs/ e-f/ exel cut</p>\n",
      },
      {
        _id: "670f3a9752ed2a4d077569ed",
        type: "others",
        weight: "2",
        amount: 5400,
        description: "<p>fdfdfdfd</p>\n",
      },
    ],
    collections: [
      {
        media: ["6678764a16bbcf7a02441988"],
        textColor: "black",
        status: true,
        _id: "6678765d16bbcf7a02441990",
        title: "LIFE STYLE",
        description: "<p>LIFE STYLE</p>\n",
        verticalImage: "670f1c4952ed2a4d07756754",
        horizontalImage: "6678764d16bbcf7a0244198c",
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
      <View style={styles.topNavigationContainer}>
        <SecondaryBackButton style={styles.buttonStyle} />
        <ThemeText style={styles.headerText}>Product Details</ThemeText>
        <WishListButton style={styles.buttonStyle} />
      </View>

      {/* Product Details Part */}
      <ScrollView contentContainerStyle={styles.scrollView}>
        {/* Top Image Part */}
        <View style={styles.imageContainer}>
          <Image
            source={imageValidator(sampleData.thumbnail.path)}
            style={styles.imageStyle}
          />
          {/* Rounded Part */}
          <View
            style={[
              styles.roundedPart,
              {
                backgroundColor: COLORS.secondary,
              },
            ]}
          />
        </View>

        {/* Product Details Part */}
        <View style={[styles.descriptionContainer]}>
          <ThemeText size={SIZES.fontSize.small}>
            {sampleData.itemCategory.title}
          </ThemeText>
          <ThemeText style={styles.itemName}>{sampleData.itemName}</ThemeText>

          <View>
            <ThemeText style={styles.subHeaderText}>Product Details</ThemeText>
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
          </View>
        </View>
      </ScrollView>

      {/* Bottom Add to Cart part */}

      <StatusBar animated style="auto" />
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  imageStyle: {
    width: "100%",
    height: 450,
  },
  imageContainer: {
    position: "relative",
  },
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
    top: Platform.OS === "ios" ? SIZES.marginOrPadding.default : 0,
    left: 0,
    right: 0,
    zIndex: 100,
    paddingTop: 40,
    marginHorizontal: SIZES.marginOrPadding.default,
  },
  scrollView: {
    flexGrow: 1,
  },
  roundedPart: {
    position: "absolute",
    width: "100%",
    height: SIZES.marginOrPadding.large,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    bottom: 0,
  },
  descriptionContainer: {
    flex: 1,
    paddingHorizontal: SIZES.marginOrPadding.default,
    marginTop: -SIZES.marginOrPadding.medium,
  },
  itemName: {
    fontSize: SIZES.fontSize.large,
    fontWeight: "700",
    marginVertical: SIZES.marginOrPadding.medium,
  },
  subHeaderText: {
    fontSize: SIZES.fontSize.medium,
    fontWeight: "bold",
    marginVertical: SIZES.marginOrPadding.small,
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
});
