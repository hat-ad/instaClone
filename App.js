import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import LoginScreen from "./src/screens/LoginScreen/index";
import { useFonts } from "expo-font";
import font from "./assets/fonts/marker.ttf";

export default function App() {
  let [fontsLoaded] = useFonts({
    regular: font,
  });
  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#00ff00" />;
  } else {
    return <LoginScreen />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
