import { StyleSheet, View, Dimensions, Image } from "react-native";
import React from "react";
import { SIZES, useThemeColor } from "@/src/constants/theme";
import { BannerData } from "@/src/models/banner.model";
import ThemeText from "../theme-text.component";
import { IMAGE_URL } from "@/src/services/queryUrls";
import PrimaryRoundedButton from "../primary-rounded-button.component";

const width = Dimensions.get("window").width;

const BannerCard = ({ singleBannerData }: { singleBannerData: BannerData }) => {
  const COLORS = useThemeColor();
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: COLORS.primaryLite,
        },
      ]}
    >
      <View style={styles.wrapper}>
        <View style={styles.leftContent}>
          <ThemeText style={styles.title}>{singleBannerData.title}</ThemeText>
          {singleBannerData.description !== "" && (
            <ThemeText numberOfLines={2} style={styles.description}>
              {singleBannerData.description.toLocaleLowerCase()}
            </ThemeText>
          )}
          <PrimaryRoundedButton title="Shop Now" buttonStyle={styles.buttonStyle} />
        </View>
        <Image
          source={{
            uri: `${IMAGE_URL}/${singleBannerData.image.path}`,
          }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
    </View>
  );
};

export default BannerCard;

const styles = StyleSheet.create({
  container: {
    width: width - SIZES.marginOrPadding.default * 2,
    marginHorizontal: SIZES.marginOrPadding.default,
    padding: SIZES.marginOrPadding.default,
    borderRadius: 20,
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: SIZES.marginOrPadding.large,
  },
  image: {
    width: "40%",
    aspectRatio: 1,
    borderRadius: 20,
  },
  title: {
    fontSize: SIZES.fontSize.xLarge,
    fontWeight: 500,
  },
  description: {
    marginTop: SIZES.marginOrPadding.xSmall,
    fontSize: SIZES.fontSize.xSmall,
    fontWeight: 400,
    lineHeight: 20,
  },
  buttonStyle: {
    marginTop: SIZES.marginOrPadding.medium,
    paddingHorizontal: SIZES.marginOrPadding.large,
    paddingVertical: SIZES.marginOrPadding.small,
    borderRadius: 10,
  },
  leftContent: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
});
