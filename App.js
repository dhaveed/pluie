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

/*
  Day 1:
    Time Spent => 2hrs [1pm - 3pm]
    Tasks Completed => {
      1. Project and git repo setup
      2. Files and Directories Setup
      3. Core Dependencies Installed [navigation, icons, appearance for themeing etc]
      4. All screens basic structure and components created [Cities, Settings, Forecast, Weather Screens]
    }
  _____________________________________________________________________________________

  What's left to do?
   [] Set up and configure navigation
   [] Set up and configure navigation headers
   [] Set up and configure redux/redux-thunk/async-storage
   [] Set up and hookup theming functionality
   [] Retrieve live weather data from API on weather screen
   [] Retrieve live data on Forecast screen
   [] Connect all Settings options as appropriate
   [] Cities "add" functionality
*/