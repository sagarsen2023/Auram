import AsyncStorage from "@react-native-async-storage/async-storage";

export async function getToken(): Promise<string | null> {
  return await AsyncStorage.getItem("bearerToken");
}

export async function setToken(token: string) {
  await AsyncStorage.setItem("bearerToken", token);
}
