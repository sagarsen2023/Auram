import AsyncStorage from "@react-native-async-storage/async-storage";

export async function getUserName(): Promise<string | null> {
  return await AsyncStorage.getItem("username");
}

export async function setUserName(username: string) {
  await AsyncStorage.setItem("username", username);
}
