import { ActivityIndicator, View } from "react-native";
import React, { useEffect, useState } from "react";
import { getUserName } from "../hooks/username";
import { router } from "expo-router";
import { useThemeColor } from "../constants/theme";

const index = () => {
  const COLORS = useThemeColor();
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
        backgroundColor: COLORS.secondary,
      }}
    >
      <ActivityIndicator color={COLORS.primary} />
    </View>
  );
};

export default index;
