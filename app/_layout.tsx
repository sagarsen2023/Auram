import * as SplashScreen from "expo-splash-screen";
import { Text } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return <Text>Hello, world!</Text>;
}
