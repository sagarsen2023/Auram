import { StyleSheet, View, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import SearchBar from "@/src/components/search-bar.component";
import { SIZES, useThemeColor } from "@/src/constants/theme";
import { collectionAPI } from "@/src/services/product.service";
import { CollectionItem } from "@/src/models/categories-and-items/collection.model";
import toastConfig from "@/src/components/toast.config";
import Toast from "react-native-toast-message";
import CollectionCardLister from "@/src/components/card-listers/collection-card-lister.component";
import PageIndicator from "@/src/components/page-indicator.component";

// TODO: Add a not found message

const AllCollections = () => {
  const COLORS = useThemeColor();
  const [collections, setCollections] = useState<CollectionItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    collectionAPI
      .getAllCollections()
      .then((response) => {
        setCollections(response.data);
      })
      .catch((error) =>
        Toast.show({
          type: "error",
          text1: "Error",
          text2: error.message,
        })
      )
      .finally(() => setLoading(false));
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
      <Toast config={toastConfig} />
      <SearchBar />
      {loading ? (
        <PageIndicator />
      ) : (
        <ScrollView contentContainerStyle={styles.scrollView}>
          {collections?.length !== 0 ? (
            <CollectionCardLister collections={collections} />
          ) : null}
        </ScrollView>
      )}
    </View>
  );
};

export default AllCollections;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: SIZES.marginOrPadding.xSmall,
    paddingBottom: SIZES.marginOrPadding.small,
  },
  scrollView: {
    marginHorizontal: SIZES.marginOrPadding.default,
  },
});
