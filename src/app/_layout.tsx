import * as SplashScreen from "expo-splash-screen";
import { Stack } from "expo-router";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen
        name="(welcome)"
        options={{
          animation: "fade_from_bottom",
          animationDuration: 300,
        }}
      />
      <Stack.Screen name="(auth)" />
      <Stack.Screen
        name="(root)"
        options={{
          animation: "fade_from_bottom",
          animationDuration: 300,
        }}
      />
      <Stack.Screen
        name="(external-routes)"
        options={{
          animation: "slide_from_right",
          animationDuration: 150,
        }}
      />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
