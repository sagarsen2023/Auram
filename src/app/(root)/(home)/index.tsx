import { ScrollView, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import Banner from "@/src/components/home-components/banner.component";
import { BannerData } from "@/src/models/banner.model";
import homeAPI from "@/src/services/home.service";
import { SIZES, useThemeColor } from "@/src/constants/theme";

const Home = () => {
  const COLORS = useThemeColor();
  const [bannerData, setBannerData] = useState<BannerData[] | null>(null);

  useEffect(() => {
    const fetchBannerData = async () => {
      const response = await homeAPI.fetchBanner();
      if (response.status) setBannerData(response.data);
    };
    fetchBannerData();
  }, []);

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: COLORS.secondary,
        },
      ]}
    >
      <ScrollView>
        <Banner bannerData={bannerData} />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: SIZES.marginOrPadding.small
  },
});
