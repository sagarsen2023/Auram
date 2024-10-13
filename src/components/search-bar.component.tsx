import { StyleSheet, TextInput, View } from "react-native";
import React from "react";
import { SIZES, useThemeColor } from "../constants/theme";
import PrimaryRoundedButton from "./buttons/primary-rounded-button.component";
import FontAwesome from "@expo/vector-icons/FontAwesome";

// TODO: Implement onPress for SearchBar with item search by slug

const SearchBar = () => {
  const COLORS = useThemeColor();
  return (
    <View style={styles.container}>
      <TextInput
        style={[
          styles.textInputStyle,
          {
            borderColor: COLORS.borderColor,
          },
        ]}
        placeholder="Search for products..."
        placeholderTextColor={COLORS.borderColor}
        selectionColor={COLORS.primary}
      />
      <PrimaryRoundedButton buttonStyle={styles.searchButton}>
        <FontAwesome name="search" size={SIZES.fontSize.xLarge} color={COLORS.secondary} />
      </PrimaryRoundedButton>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: SIZES.marginOrPadding.default,
    marginBottom: SIZES.marginOrPadding.small,
    alignItems: "center",
    justifyContent: "space-between",
  },
  textInputStyle: {
    flex: 1,
    paddingVertical: SIZES.marginOrPadding.small,
    paddingHorizontal: SIZES.marginOrPadding.medium,
    borderRadius: SIZES.borderRadius.medium,
    borderWidth: 1,
    height: "100%",
    fontSize: SIZES.fontSize.xLarge,
  },
  searchButton: {
    marginLeft: SIZES.marginOrPadding.small,
    width: 50,
    height: 50,
  },
});
