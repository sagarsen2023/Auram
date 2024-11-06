import { Platform, StyleSheet, View } from "react-native";
import React from "react";
import { SIZES, useThemeColor } from "@/src/constants/theme";
import ThemeText from "../theme-text.component";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import PrimaryRoundedButton from "../buttons/primary-rounded-button.component";
import priceFormatter from "@/src/utils/priceFormatter";

const AddToCartSection = ({ finalPrice }: { finalPrice?: number }) => {
  const COLORS = useThemeColor();
  return (
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
            {priceFormatter(finalPrice)}
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
  );
};

export default AddToCartSection;

const styles = StyleSheet.create({
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
