import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign, Fontisto } from "@expo/vector-icons";

export default function Forecast() {

    const icons = ["day-sunny", "snow", "rain", "lightning", "night-alt-cloudy", "night-clear"]

  const ForecastItem = () => {
    return (
      <View style={styles.forecastItem}>
        <Text style={styles.forecastDatetime}>10:00</Text>
        <Fontisto name={icons[Math.floor(Math.random() * icons.length)]} style={styles.forecastIcon} />
        {/* <View>
          <Text>26&deg;C</Text>
        </View> */}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.pageTitle}>
        <Text style={styles.title}>Forecast</Text>
      </View>
      <View style={styles.contentWrap}>
        <View style={styles.forecastSection}>
          <Text style={styles.forecastSectionTitle}>Hourly Forecast</Text>
          <View style={styles.forecastListWrap}>
            <ForecastItem />
            <ForecastItem />
            <ForecastItem />
            <ForecastItem />
            <ForecastItem />
            <ForecastItem />
          </View>
        </View>
        
        <View style={styles.forecastSection}>
          <Text style={styles.forecastSectionTitle}>Daily Forecast</Text>
          <View style={styles.forecastListWrap}>
            <ForecastItem />
            <ForecastItem />
            <ForecastItem />
            <ForecastItem />
            <ForecastItem />
            <ForecastItem />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 30,
  },
  pageTitle: {
    flex: 0.2,
    justifyContent: "center"
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    letterSpacing: -1,
    fontWeight: "500"
  },
  contentWrap: {
    flex: 1,
  },
  forecastSection: {
      marginBottom: 50
  },
  forecastSectionTitle: {
    marginBottom: 20,
    fontSize: 16,
    fontWeight: "500",
  },
  forecastListWrap: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  forecastItem: {
    // marginRight: 20,
    alignItems: "center",
  },
  forecastDatetime: {
      marginBottom: 8,
      fontSize: 13,
  },
  forecastIcon: {
    fontSize: 28,
  },
  forecastDetails: {},
});
