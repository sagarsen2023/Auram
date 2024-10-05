import * as SplashScreen from "expo-splash-screen";
import { Stack } from "expo-router";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="(welcome)/index"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
