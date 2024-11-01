import { StyleSheet, View } from "react-native";
import React from "react";
import { CollectionItem } from "@/src/models/categories-and-items/collection.model";
import CollectionCard from "../cards/collection-card.component";

const CollectionCardLister = ({
  collections,
}: {
  collections: CollectionItem[];
}) => {
  return (
    <View style={styles.container}>
      {collections.map((collection) => (
        <CollectionCard key={collection._id} collection={collection} />
      ))}
    </View>
  );
};

export default CollectionCardLister;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
});
