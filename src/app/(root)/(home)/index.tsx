import { ScrollView, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import Banner from "@/src/components/home-components/banner.component";
import { BannerData } from "@/src/models/banner.model";
import homeAPI from "@/src/services/home.service";
import { SIZES, useThemeColor } from "@/src/constants/theme";
import { CategoryItem } from "@/src/models/categories-and-items/category.model";
import categoryAPI from "@/src/services/product.service";

const Home = () => {
  const COLORS = useThemeColor();
  const [bannerData, setBannerData] = useState<BannerData[] | null>(null);
  const [categories, setCategories] = useState<CategoryItem[] | null>(null);

  useEffect(() => {
    const fetchAllData = async () => {
      const bannerResponse = await homeAPI.fetchBanner();
      if (bannerResponse.status) setBannerData(bannerResponse.data);
      const categoryResponse = await categoryAPI.getAllCategories();
      if (categoryResponse.status) setCategories(categoryResponse.data);
    };
    fetchAllData();
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
        {/* Banner Section */}
        <Banner bannerData={bannerData} />

        {/* Category Section */}
        {/* TODO: Complete Category Section */}
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: SIZES.marginOrPadding.small,
  },
});
