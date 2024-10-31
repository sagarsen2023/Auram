import React from "react";
import { Stack } from "expo-router";

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="all-collections"
        options={{
          animation: "slide_from_right",
          headerShown: true,
          title: "All Collections",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: "transparent",
          },
        }}
      />
    </Stack>
  );
};

export default _layout;
