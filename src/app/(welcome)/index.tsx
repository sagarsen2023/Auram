import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";

const Welcome = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Welcome to React Native!</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
});

export default Welcome;
