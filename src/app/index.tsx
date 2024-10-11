import { ActivityIndicator, View } from "react-native";
import React, { useEffect, useState } from "react";
import { getToken } from "../hooks/token";
import { router } from "expo-router";

const index = () => {
  const [_, setIsLogged] = useState(false);
  useEffect(() => {
    getToken().then((token) => {
      if (token) {
        setIsLogged(true);
        router.replace("/(root)/");
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
