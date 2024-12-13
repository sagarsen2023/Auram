import { StyleSheet, View } from "react-native";
import React from "react";
import { StoneDetails } from "@/src/models/categories-and-items/product.model.ts";
import WebView, { WebViewMessageEvent } from "react-native-webview";
import htmlContentGenerator, {
  useWebViewHeight,
} from "@/src/utils/htmlContentGenerator";
import { SIZES, useThemeColor } from "@/src/constants/theme";
import ThemeText from "../theme-text.component";

const StoneDetailsCard = ({ stoneDetails }: { stoneDetails: StoneDetails }) => {
  const COLORS = useThemeColor();
  const [webViewHeight, handleWebViewMessage] = useWebViewHeight() as [
    number,
    (event: WebViewMessageEvent) => void
  ];

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: COLORS.primaryLite,
          borderColor: COLORS.borderColor,
          borderWidth: 1,
          borderRadius: SIZES.borderRadius.medium,
        },
      ]}
    >
      {/* Type */}
      <View style={styles.propertiesContainer}>
        <ThemeText size={SIZES.fontSize.large} fontWeight={"bold"}>
          Material Type:{" "}
        </ThemeText>
        <ThemeText size={SIZES.fontSize.medium}>{stoneDetails.type}</ThemeText>
      </View>

      {/* Weight */}
      <View style={styles.propertiesContainer}>
        <ThemeText size={SIZES.fontSize.large} fontWeight={"bold"}>
          Weight:{" "}
        </ThemeText>
        <ThemeText size={SIZES.fontSize.medium}>
          {stoneDetails.weight}
        </ThemeText>
      </View>

      {/* Amount */}
      {stoneDetails.amount !== null && (
        <View style={styles.propertiesContainer}>
          <ThemeText size={SIZES.fontSize.large} fontWeight={"bold"}>
            Amount:{" "}
          </ThemeText>
          <ThemeText size={SIZES.fontSize.medium}>
            {stoneDetails.amount}
          </ThemeText>
        </View>
      )}

      {/* Description */}
      <View
        style={{
          marginTop: SIZES.marginOrPadding.xSmall,
        }}
      >
        <ThemeText size={SIZES.fontSize.large} fontWeight={"bold"}>
          Description:{" "}
        </ThemeText>
        <WebView
          style={{ height: webViewHeight }}
          source={{
            html: htmlContentGenerator({
              htmlContent: stoneDetails.description,
              backgroundColor: COLORS.primaryLite,
              textColor: COLORS.text,
            }),
          }}
          onMessage={handleWebViewMessage}
          javaScriptEnabled
        />
      </View>
    </View>
  );
};

export default StoneDetailsCard;

const styles = StyleSheet.create({
  container: {
    padding: SIZES.marginOrPadding.medium,
    gap: SIZES.marginOrPadding.small,
  },
  propertiesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
