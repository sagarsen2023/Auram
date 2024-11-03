import { ScrollView, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import Banner from "@/src/components/home-components/banner.component";
import { BannerData } from "@/src/models/banner.model";
import homeAPI from "@/src/services/home.service";
import { SIZES, useThemeColor } from "@/src/constants/theme";
import { CategoryItem } from "@/src/models/categories-and-items/category.model";
import {
  categoryAPI,
  collectionAPI,
  productAPI,
} from "@/src/services/product.service";
import CategoryList from "@/src/components/home-components/category-list.component";
import { Product } from "@/src/models/categories-and-items/featured-item.model.ts";
import ProductList from "@/src/components/home-components/product-list.component";
import HomeFooter from "@/src/components/home-components/home-footer.component";
import CollectionList from "@/src/components/home-components/collection-list.component";
import { CollectionItem } from "@/src/models/categories-and-items/collection.model";
import SearchBar from "@/src/components/search-bar.component";

const Home = () => {
  const COLORS = useThemeColor();

  // Individual loading states
  const [bannerLoading, setBannerLoading] = useState(true);
  const [categoryLoading, setCategoryLoading] = useState(true);
  const [featuredProductsLoading, setFeaturedProductsLoading] = useState(true);
  const [collectionsLoading, setCollectionsLoading] = useState(true);
  const [latestProductsLoading, setLatestProductsLoading] = useState(true);

  const [refreshing, setRefreshing] = useState(false);

  // Data states
  const [bannerData, setBannerData] = useState<BannerData[] | undefined>(
    undefined
  );
  const [categories, setCategories] = useState<CategoryItem[] | undefined>(
    undefined
  );
  const [featuredProducts, setFeaturedProducts] = useState<Product[] | null>(
    null
  );
  const [collections, setCollections] = useState<CollectionItem[] | undefined>(
    undefined
  );
  const [latestProducts, setLatestProducts] = useState<Product[] | null>(null);

  const fetchAllData = async () => {
    try {
      // Fetch Banner
      const bannerResponse = await homeAPI.fetchBanner();
      if (bannerResponse.status) setBannerData(bannerResponse.data);
    } catch (error) {
      console.log("Error fetching banners:", error);
    } finally {
      setBannerLoading(false);
    }

    try {
      // Fetch Categories
      const categoryResponse = await categoryAPI.getAllCategories();
      if (categoryResponse.status) setCategories(categoryResponse.data);
    } catch (error) {
      console.log("Error fetching categories:", error);
    } finally {
      setCategoryLoading(false);
    }

    try {
      // Fetch Featured Products
      const featuredProductsResponse = await productAPI.getFeaturedProducts();
      if (featuredProductsResponse.status)
        setFeaturedProducts(featuredProductsResponse.data);
    } catch (error) {
      console.log("Error fetching featured products:", error);
    } finally {
      setFeaturedProductsLoading(false);
    }

    try {
      // Fetch Collections
      const collectionResponse = await collectionAPI.getAllCollections();
      if (collectionResponse.status) setCollections(collectionResponse.data);
    } catch (error) {
      console.log("Error fetching collections:", error);
    } finally {
      setCollectionsLoading(false);
    }

    try {
      // Fetch Latest Products
      const latestProductsResponse = await productAPI.getLatestProducts();
      if (latestProductsResponse.status)
        setLatestProducts(latestProductsResponse.data);
    } catch (error) {
      console.log("Error fetching latest products:", error);
    } finally {
      setLatestProductsLoading(false);
    }
  };

  useEffect(() => {
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
      <SearchBar />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewStyle}
      >
        {/* Banner Section */}
        <Banner bannerData={bannerData} loading={bannerLoading} />

        <View style={styles.bodySection}>
          {/* Category Section */}
          <CategoryList
            categories={categories}
            loading={categoryLoading}
            loaderCount={6}
          />

          {/* Featured Products */}
          <ProductList
            loading={featuredProductsLoading}
            title="Featured Products"
            products={featuredProducts}
            loaderCount={4}
          />

          {/* Top Collections */}
          <CollectionList
            loading={collectionsLoading}
            title="Top Collections"
            collections={collections}
            loaderCount={4}
          />

          {/* Latest Products */}
          <ProductList
            loading={latestProductsLoading}
            title="Latest Products"
            products={latestProducts?.slice(0, 4) || []}
            loaderCount={4}
          />

          {/* Footer */}
          <HomeFooter />
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
    paddingTop: SIZES.marginOrPadding.small,
    paddingBottom: 100,
  },
  bodySection: {
    marginHorizontal: SIZES.marginOrPadding.default,
  },
});
