import AsyncStorage from "@react-native-async-storage/async-storage";

export async function getToken() {
  return await AsyncStorage.getItem("bearerToken");
}

export async function setToken(token: string) {
  await AsyncStorage.setItem("bearerToken", token);
}
