import { ScrollView, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import Banner from "@/src/components/home-components/banner.component";
import { BannerData } from "@/src/models/banner.model";
import homeAPI from "@/src/services/home.service";
import { SIZES, useThemeColor } from "@/src/constants/theme";
import { CategoryItem } from "@/src/models/categories-and-items/category.model";
import { categoryAPI, productAPI } from "@/src/services/product.service";
import CategoryList from "@/src/components/home-components/category-list.component";
import PageIndicator from "@/src/components/page-indicator.component";
import { Product } from "@/src/models/categories-and-items/featured-item.model.ts";
import ProductListRenderer from "@/src/components/home-components/product-list-renderer.component";

const Home = () => {
  const COLORS = useThemeColor();
  const [isLoading, setIsLoading] = useState(true);
  const [bannerData, setBannerData] = useState<BannerData[] | null>(null);
  const [categories, setCategories] = useState<CategoryItem[] | null>(null);
  const [featuredProducts, setFeaturedProducts] = useState<Product[] | null>(
    null
  );

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const bannerResponse = await homeAPI.fetchBanner();
        if (bannerResponse.status) setBannerData(bannerResponse.data);
        const categoryResponse = await categoryAPI.getAllCategories();
        if (categoryResponse.status) setCategories(categoryResponse.data);
        const featuredProductsResponse =
          await productAPI.getFeaturedCollection();
        if (featuredProductsResponse.status)
          setFeaturedProducts(featuredProductsResponse.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAllData();
  }, []);

  if (isLoading) return <PageIndicator />;

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: COLORS.secondary,
        },
      ]}
    >
      <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollViewStyle}
      >
        {/* Banner Section */}
        <Banner bannerData={bannerData} />

        <View style={styles.bodySection}>
          {/* Category Section */}
          <CategoryList categories={categories} />

          {/* Featured Products */}
          {featuredProducts && (
            <ProductListRenderer
              title="Featured Products"
              products={featuredProducts}
            />
          )}

          {/* Latest Products */}
          {featuredProducts && (
            <ProductListRenderer
              title="Latest Products"
              products={featuredProducts}
            />
          )}
          {/* Footer */}
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewStyle: {
    paddingBottom:100,
  },
  bodySection: {
    marginHorizontal: SIZES.marginOrPadding.default,
  },
});
