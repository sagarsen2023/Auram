import { FlatList, StyleSheet, View, Dimensions } from "react-native";
import React, { useRef } from "react";
import BannerCard from "./banner-card.component";
import { BannerData } from "@/src/models/banner.model";
import DotComponent from "./dot.component";
import { SIZES } from "@/src/constants/theme";
import BannerCardLoader from "../shimmer-loaders/banner-card-loader.component";

const Banner = ({
  bannerData,
  loading,
}: {
  bannerData?: BannerData[];
  loading: boolean;
}) => {
  const width = Dimensions.get("window").width;
  const flatListRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  if (loading) {
    return <BannerCardLoader />;
  }
  
  return (
    <View>
      {bannerData && (
        <>
          <FlatList
            ref={flatListRef}
            style={{ width }}
            data={bannerData}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => <BannerCard singleBannerData={item} />}
            horizontal
            scrollEnabled
            showsHorizontalScrollIndicator={false}
            snapToAlignment="center"
            scrollEventThrottle={50}
            decelerationRate={"fast"}
            pagingEnabled={true}
            onScroll={(event) => {
              const slideIndex = Math.ceil(
                event.nativeEvent.contentOffset.x / width
              );
              setCurrentIndex(slideIndex);
            }}
          />
          <View style={styles.dotComponentContainer}>
            {bannerData?.map((_, index) => (
              <DotComponent key={index} active={currentIndex === index} />
            ))}
          </View>
        </>
      )}
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  dotComponentContainer: {
    marginTop: SIZES.marginOrPadding.small,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
