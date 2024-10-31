import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SecondaryRoundedButton from "@/src/components/buttons/secondary-rounded-button.component";
import { removeToken } from "@/src/hooks/token";
import { removeUserName } from "@/src/hooks/username";
import { router } from "expo-router";

const Profile = () => {
  const handleLogOut = async () => {
    try {
      await removeToken();
      await removeUserName();
      router.replace("/(welcome)/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <SecondaryRoundedButton onPress={handleLogOut}>
        <Text>Log out</Text>
      </SecondaryRoundedButton>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
