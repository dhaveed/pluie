import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import { connect } from "react-redux";
import { GET_WEATHER } from "../redux/action-types";
import * as Location from "expo-location";
import { getWeather } from "../redux/weatherActions";
import { weatherConditions } from "../constants/weatherConditions";

const mapStateToProps = (state) => {
  const { weather, ui } = state;
  return {
    weather,
    ui,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getWeather: (coords) => dispatch(getWeather(coords)),
  };
};

const formatTimeStamp = (timestamp) => {
  let options = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  let formatted = new Date(timestamp * 1000).toLocaleString("en-US", options)
  return formatted;
};

const getToday = () => {
  let date = new Date();
  let formatted = date.toLocaleString("en-us", { weekday: "long" }) +
    ", " +
    date.getDay() +
    " " +
    date.toLocaleString("en-us", { month: "long" }) +
    " " +
    date.getFullYear();
  return formatted;
}

const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function Weather(props) {
  const { colors } = useTheme();
  const { navigation, weather, ui } = props;
  const { primary } = weather;
  const [locationAccess, setLocationAccess] = useState(false);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        // setErrorMsg('Permission to access location was denied');
        setLocationAccess(false);
        return;
      }

      setLocationAccess(true);

      let location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Low,
      });
      const { longitude, latitude } = location.coords;
      setLocation({ long: longitude, lat: latitude });
    })();
  }, []);

  useEffect(() => {
    const { getWeather } = props;
    // console.log(props);
    location !== null && getWeather(location);
  }, [location]);

  const getWeatherIcon = (condition) => {
    let icon = weatherConditions.hasOwnProperty(condition) ? weatherConditions[condition] : weatherConditions["Other"]
    return icon;
  }

  if (!!primary && typeof primary.main !== "undefined") {
    return (
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <View style={styles.contentWrap}>
          <Text style={[styles.smallText, { color: colors.text }]}>
            in sync
          </Text>
          {/* Might change the in sync text to something for switching between temp units */}
          <View style={styles.weatherContainer}>
            <Text style={[styles.date, { color: colors.text }]}>
              {/* Friday, 25 December 2020 */}
              {getToday()}
            </Text>
            {/* <Text
              style={{ color: colors.text, marginTop: 20, textAlign: "center" }}
            >
              {JSON.stringify(primary)}
            </Text> */}
            <View style={styles.mainTemp}>
              <Text style={[styles.mainTempText, { color: colors.text }]}>
                {primary.main.temp}
              </Text>
              <Text style={[styles.tempUnit, { color: colors.text }]}>
                &deg;C
              </Text>
            </View>
            <View style={styles.tempThresholdContainer}>
              <View style={styles.tempThresholdWrap}>
                <Feather name="arrow-down" size={24} color={colors.text} />
                <Text
                  style={[styles.tempThresholdText, { color: colors.text }]}
                >
                  {primary.main.temp_min}&deg;C
                </Text>
              </View>
              <View style={styles.tempThresholdWrap}>
                <Feather name="arrow-up" size={24} color={colors.text} />
                <Text
                  style={[styles.tempThresholdText, { color: colors.text }]}
                >
                  {primary.main.temp_max}&deg;C
                </Text>
              </View>
            </View>
            <View style={[styles.weatherConditionWrap, { color: colors.text }]}>
              <Feather name={getWeatherIcon(primary.weather[0].main)} size={128} color={colors.text} />
              <Text style={[styles.weatherCondition, { color: colors.text }]}>
                {/* Light Drizzle */}
                {capitalizeFirstLetter(primary.weather[0].description)}
              </Text>
            </View>
            <View style={styles.weatherFooter}>
              <View style={styles.weatherFooterItem}>
                <Feather
                  name="sunrise"
                  style={[styles.todIcon, { color: colors.text }]}
                />
                <Text style={[styles.tod, { color: colors.text }]}>
                  {formatTimeStamp(primary.sys.sunrise)}
                </Text>
              </View>
              <View style={styles.weatherFooterItem}>
                <Feather
                  name="sunset"
                  style={[styles.todIcon, { color: colors.text }]}
                />
                <Text style={[styles.tod, { color: colors.text }]}>
                {formatTimeStamp(primary.sys.sunset)}
                </Text>
              </View>
            </View>
          </View>
        </View>
        {/* <TouchableOpacity
          style={styles.forecastArrowWrap}
          onPress={() => navigation.navigate("Forecast")}
        >
          <Feather name="chevron-up" size={24} color={colors.text} />
        </TouchableOpacity> */}
      </View>
    );
  } else {
    return (
      <View>
        <Text style={{ color: colors.text }}>getting location</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 40,
    backgroundColor: "white",
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
    textAlign: "center",
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
    justifyContent: "center",
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
    marginTop: 30,
    fontWeight: "500",
    opacity: 0.4,
  },
  weatherFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.4,
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
  forecastArrowWrap: {
    position: "absolute",
    width: "100%",
    alignItems: "center",
    alignSelf: "center",
    bottom: 50,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
