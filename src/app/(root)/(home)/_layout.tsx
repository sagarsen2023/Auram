import { Stack } from "expo-router";
import { Text } from "react-native";
import { HeaderLeftContent, HeaderRightContent } from "@/src/components/header-components/home-header.component";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "",
          animation: "fade_from_bottom",
          animationDuration: 500,
          headerLeft: () => <HeaderLeftContent />,
          headerRight: () => <HeaderRightContent />,
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: "transparent",
          },
        }}
      />
    </Stack>
  );
}
