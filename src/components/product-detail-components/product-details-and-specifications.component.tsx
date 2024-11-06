import { StyleSheet, View } from "react-native";
import React from "react";
import ThemeText from "../theme-text.component";
import WebView, { WebViewMessageEvent } from "react-native-webview";
import { SIZES, useThemeColor } from "@/src/constants/theme";
import htmlContentGenerator, {
  useWebViewHeight,
} from "@/src/utils/htmlContentGenerator";

const ProductDetailsAndSpecifications = ({
  description,
  specification,
}: {
  description?: string;
  specification?: string;
}) => {
  const COLORS = useThemeColor();
  const [webViewHeight, handleWebViewMessage] = useWebViewHeight() as [
    number,
    (event: WebViewMessageEvent) => void
  ];
  return (
    <>
      {description && (
        <View>
          <ThemeText style={styles.subHeaderText}>Product Details</ThemeText>
          <WebView
            style={{ height: webViewHeight + 20 }}
            originWhitelist={["*"]}
            source={{
              html: htmlContentGenerator({
                htmlContent: description,
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
      {specification && (
        <View>
          <ThemeText style={styles.subHeaderText}>
            Product Specifications
          </ThemeText>
          <WebView
            style={{ height: webViewHeight }}
            originWhitelist={["*"]}
            source={{
              html: htmlContentGenerator({
                htmlContent: specification,
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
    </>
  );
};

export default ProductDetailsAndSpecifications;

const styles = StyleSheet.create({
  subHeaderText: {
    fontSize: SIZES.fontSize.large,
    fontWeight: "600",
    marginTop: SIZES.marginOrPadding.medium,
    marginBottom: SIZES.marginOrPadding.small,
  },
});
