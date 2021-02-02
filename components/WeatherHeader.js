import { Feather } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export const WeatherHeaderRight = ({ navigation }) => {
  return (
    <View style={styles.headerRightStyles}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Cities")}
        style={styles.headerRightButton}
      >
        <Feather name="map-pin" size={24} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Settings")}
        style={styles.headerRightButton}
      >
        <Feather name="settings" size={24} />
      </TouchableOpacity>
    </View>
  );
};

export const WeatherHeaderLeft = ({ navigation }) => {
    const { color } = useTheme();
  return (
    <View style={styles.headerLeftWrap}>
      {/* <TouchableOpacity> */}
        <Text style={[styles.headerLocation]}>Mumbai</Text>
        <Text style={styles.smallText}>Current location</Text>
      {/* </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  headerRightStyles: {
    flexDirection: "row",
    alignItems: "center",
    // borderWidth: 1,
    paddingHorizontal: 25,
    justifyContent: "space-between",
  },
  headerRightButton: {
    marginLeft: 20,
  },
  headerLeftWrap: {
    paddingHorizontal: 25,
  },
  headerLocation: {
    fontSize: 20,
    fontWeight: "500",
    letterSpacing: -1,
    marginBottom: 1,
  },
  smallText: {
    fontSize: 13,
    opacity: 0.3,
    fontWeight: "500",
    letterSpacing: -1,
  },
});