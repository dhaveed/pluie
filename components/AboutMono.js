import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import Constants from "expo-constants";

export default function AboutMono() {
  return (
    <View>
      <View style={styles.header}>
        <View style={styles.iconWrap}></View>
        <Text style={styles.headerTitle}>About Mono</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.aboutText}>
            Mono Weather is a simple/minimal weather app. The app shows the climate and weather condition for the user's current location.
            Mono also has other features like dark/light mode, viewing of detailed/hourly weather forecasts, and saving of multiple cities for quick weather information.
        </Text>
        <Text style={styles.versionCode}>
            &copy; {new Date().getFullYear()} Mono Weather v{Platform.OS === "ios" ? Constants.platform.ios.buildNumber : Constants.platform.android.versionCode}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingVertical: 10,
    alignItems: "center",
    marginBottom: 10
  },
  iconWrap: {
    backgroundColor: "#d3e0ea70",
    height: 70,
    width: 70,
    borderRadius: 25,
    marginBottom: 15,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "600",
    letterSpacing: -0.5,
  },
  content: {
    paddingHorizontal: 10,
  },
  aboutText: {
      textAlign: "center",
      fontSize: 16,
      lineHeight: 22,
      color: "#30475e",
      opacity: 0.4,
  },
  versionCode: {
    position: "relative",
    alignSelf: "center",
    bottom: -30,
    fontWeight: "500",
    opacity: 0.3,
  }
});
