import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Cities from "./screens/Cities";
import Forecast from "./screens/Forecast";
import Settings from "./screens/Settings";
import Weather from "./screens/Weather";

export default function App() {
  return (
    <View style={styles.container}>
      <Weather />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
