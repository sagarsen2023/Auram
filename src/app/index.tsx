import { ActivityIndicator, View } from "react-native";
import React, { useEffect, useState } from "react";
import { getUserName } from "../hooks/username";
import { router } from "expo-router";

const index = () => {
  const [_, setIsLogged] = useState(false);
  useEffect(() => {
    getUserName().then((token) => {
      if (token) {
        setIsLogged(true);
        router.replace("/(root)/(home)");
      } else {
        setIsLogged(false);
        router.replace("/(welcome)/");
      }
    });
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ActivityIndicator />
    </View>
  );
};

export default index;
