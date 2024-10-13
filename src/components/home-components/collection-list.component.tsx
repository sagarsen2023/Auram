import { StyleSheet, View } from "react-native";
import React from "react";
import { CollectionItem } from "@/src/models/categories-and-items/collection.model";
import CollectionCard from "../cards/collection-card.component";
import ThemeText from "../theme-text.component";
import SecondaryRoundedButton from "../buttons/secondary-rounded-button.component";
import { SIZES } from "@/src/constants/theme";

// TODO: Implement onPress for CollectionList
// TODO: Implement View All button redirection

const CollectionList = ({
  collections,
  title,
}: {
  title?: string;
  collections: CollectionItem[];
}) => {
  const selectedCollections = collections.slice(0, 4);
  return (
    <View style={styles.container}>
      {title && (
        <ThemeText
          style={styles.title}
        >
          {title}
        </ThemeText>
      )}
      <View style={styles.collectionCardWrapper}>
        {selectedCollections.map((collection) => (
          <CollectionCard key={collection._id} collection={collection} />
        ))}
      </View>
      <View style={{ alignItems: "center" }}>
        <SecondaryRoundedButton
          title="View All"
          buttonStyle={styles.buttonStyle}
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
