import React from "react";
import { Stack } from "expo-router";
import { useThemeColor } from "@/src/constants/theme";
import SecondaryBackButton from "@/src/components/buttons/secondary-back-button.component";

const _layout = () => {
  const COLORS = useThemeColor();
  return (
    <Stack
      screenOptions={{
        animation: "slide_from_right",
        headerShadowVisible: false,
        headerTitleStyle:{
          color: COLORS.primary,
          fontWeight: "600"
        },
        headerStyle: {
          backgroundColor: COLORS.secondary,
        },
      }}
    >
      <Stack.Screen
        name="all-collections"
        options={{
          title: "All Collections",
          headerTitleAlign: "center",
          headerLeft: () => <SecondaryBackButton />,
        }}
      />
    </Stack>
  );
};

export default _layout;
