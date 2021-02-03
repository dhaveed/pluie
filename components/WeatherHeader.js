import { Feather } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  const { ui, weather } = state;
  return {
    weather
  }
}

export const WeatherHeaderRight = ({ navigation }) => {
  const { colors } = useTheme();
  return (
    <View style={styles.headerRightStyles}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Cities")}
        style={styles.headerRightButton}
      >
        <Feather name="map-pin" size={24} color={colors.text} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Settings")}
        style={styles.headerRightButton}
      >
        <Feather name="settings" size={24} color={colors.text} />
      </TouchableOpacity>
    </View>
  );
};

const WeatherHeaderLeft = ({ navigation }) => {
  const { colors } = useTheme();
  return (
    <View style={styles.headerLeftWrap}>
      {/* <TouchableOpacity> */}
      <Text style={[styles.headerLocation, { color: colors.text }]}>
        Uxbridge, London
      </Text>
      <Text style={[styles.smallText, { color: colors.text }]}>
        Current location
      </Text>
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
    marginBottom: 2,
  },
  smallText: {
    fontSize: 13,
    opacity: 0.3,
    fontWeight: "500",
    letterSpacing: -1,
  },
});

export default connect(mapStateToProps)(WeatherHeaderLeft);
