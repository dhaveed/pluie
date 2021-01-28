import { Feather } from "@expo/vector-icons";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Weather() {
  return (
    <View style={styles.container}>
      <View style={styles.contentWrap}>
        <Text style={styles.smallText}>in sync</Text>
        {/* Might change the in sync text to something for switching between temp units */}
        <View style={styles.weatherContainer}>
          <Text style={styles.date}>Friday, 25 December 2020</Text>
          <View style={styles.mainTemp}>
            <Text style={styles.mainTempText}>22</Text>
            <Text style={styles.tempUnit}>&deg;C</Text>
          </View>
          <View style={styles.tempThresholdContainer}>
            <View style={styles.tempThresholdWrap}>
              <Feather name="arrow-down" size={24} />
              <Text style={styles.tempThresholdText}>16&deg;C</Text>
            </View>
            <View style={styles.tempThresholdWrap}>
              <Feather name="arrow-up" size={24} />
              <Text style={styles.tempThresholdText}>26&deg;C</Text>
            </View>
          </View>
          <View style={styles.weatherConditionWrap}>
            <Feather name="cloud-drizzle" size={128} />
            <Text style={styles.weatherCondition}>Light Drizzle</Text>
          </View>
          <View style={styles.weatherFooter}>
            <View style={styles.weatherFooterItem}>
              <Feather name="sunrise" style={styles.todIcon} />
              <Text style={styles.tod}>09:18 AM</Text>
            </View>
            <View style={styles.weatherFooterItem}>
              <Feather name="sunrise" style={styles.todIcon} />
              <Text style={styles.tod}>09:18 AM</Text>
            </View>
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
  contentWrap: {
    alignItems: "center",
    justifyContent: "center",
  },
  smallText: {
    fontSize: 12,
    opacity: 0.4,
  },
  weatherContainer: {
    paddingVertical: 30,
    justifyContent: "center",
  },
  date: {
    opacity: 0.4,
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center"
  },
  mainTemp: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "center",
    marginVertical: 30,
  },
  mainTempText: {
    fontSize: 86,
  },
  tempUnit: {
    fontSize: 28,
  },
  tempThresholdContainer: {
    flexDirection: "row",
    justifyContent: "center"
    // justifyContent: "space-around",
  },
  tempThresholdWrap: {
    flexDirection: "row",
    alignItems: "center",
    opacity: 0.3,
    marginHorizontal: 10,
  },
  tempThresholdText: {
    fontSize: 16,
  },
  weatherConditionWrap: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
  },
  weatherCondition: {
    fontSize: 16,
    marginTop: 20,
    fontWeight: "500",
    opacity: 0.4,
  },
  weatherFooter: {
    flexDirection: "row",
    opacity: 0.4
  },
  weatherFooterItem: {
    flexDirection: "row",
    alignItems: "baseline",
    marginHorizontal: 10,
  },
  todIcon: {
    marginRight: 10,
    fontSize: 20,
  },
  tod: {
    //tod == time of day
    fontSize: 16,
    marginTop: 20,
    fontWeight: "500",
  },
});
