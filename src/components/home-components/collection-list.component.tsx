import { StyleSheet, View } from "react-native";
import React from "react";
import { CollectionItem } from "@/src/models/categories-and-items/collection.model";
import CollectionCard from "../cards/collection-card.component";
import ThemeText from "../theme-text.component";
import SecondaryRoundedButton from "../buttons/secondary-rounded-button.component";
import { SIZES } from "@/src/constants/theme";
import { router } from "expo-router";
import CollectionCardLoader from "../shimmer-loaders/collection-card-loader.component";

// TODO: Implement onPress for CollectionList

const CollectionList = ({
  collections,
  title,
  loading,
  loaderCount,
}: {
  title?: string;
  collections?: CollectionItem[];
  loading: boolean;
  loaderCount: number;
}) => {
  if (loading) {
    return (
      <View style={styles.collectionCardWrapper}>
        {Array.from({ length: loaderCount }).map((_, index) => (
          <CollectionCardLoader key={index} />
        ))}
      </View>
    );
  }
  if (!collections) return null;
  const selectedCollections = collections.slice(0, 4);
  return (
    <View style={styles.container}>
      {title && <ThemeText style={styles.title}>{title}</ThemeText>}
      <View style={styles.collectionCardWrapper}>
        {selectedCollections.map((collection) => (
          <CollectionCard key={collection._id} collection={collection} />
        ))}
      </View>
      <View style={{ alignItems: "center" }}>
        <SecondaryRoundedButton
          title="View All"
          buttonStyle={styles.buttonStyle}
          onPress={() => router.push("/(external-routes)/all-collections")}
        />
      </View>
    </View>
  );
};

export default CollectionList;

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.marginOrPadding.medium,
  },
  title: {
    fontSize: SIZES.fontSize.large,
    marginBottom: SIZES.marginOrPadding.default,
    fontWeight: "bold",
  },
  collectionCardWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  buttonStyle: {
    marginTop: SIZES.marginOrPadding.xSmall,
    marginBottom: SIZES.marginOrPadding.default,
    padding: SIZES.marginOrPadding.small,
    width: 100,
    borderRadius: SIZES.borderRadius.default,
  },
});
