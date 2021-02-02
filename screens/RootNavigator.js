import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Cities from "./Cities";
import Forecast from "./Forecast";
import Settings from "./Settings";
import Weather from "./Weather";
import { Feather } from "@expo/vector-icons";
import {
  WeatherHeaderLeft,
  WeatherHeaderRight,
} from "../components/WeatherHeader";
import { DarkTheme, DefaultTheme, NavigationContainer, useTheme } from "@react-navigation/native";
import { AppearanceProvider, useColorScheme } from "react-native-appearance";
import { MonoDark } from "../theme/dark";
import { MonoLight } from "../theme/light";

const Stack = createStackNavigator();

const BackButton = ({ label, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={styles.backButton}
    >
      <Feather name="chevron-left" size={20} />
      <Text style={styles.backButtonLabel}>{label}</Text>
    </TouchableOpacity>
  );
};

export default function RootNavigator() {
  const scheme = useColorScheme();
  const { color} = useTheme
  return (
    <AppearanceProvider>
      <NavigationContainer theme={scheme === "light" ? DarkTheme : DefaultTheme}>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              borderBottomWidth: 0,
              shadowOpacity: 0,
            },
            title: "",
          }}
          // mode={"modal"}
        >
          <Stack.Screen
            name="Weather"
            component={Weather}
            options={({ route, navigation }) => ({
              headerRight: () => <WeatherHeaderRight navigation={navigation} />,
              headerLeft: () => <WeatherHeaderLeft navigation={navigation} />,
            })}
          />
          <Stack.Screen name="Forecast" component={Forecast} />
          <Stack.Screen
            name="Cities"
            component={Cities}
            options={({ route, navigation }) => ({
              headerLeft: () => (
                <BackButton
                  label="Select City
            "
                  navigation={navigation}
                />
              ),
              headerRight: () => (
                <TouchableOpacity style={styles.headerRight}>
                  <Feather name="plus" size={20} />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen
            name="Settings"
            component={Settings}
            options={({ route, navigation }) => ({
              headerLeft: () => (
                <BackButton label="Settings" navigation={navigation} />
              ),
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AppearanceProvider>
  );
}

const styles = StyleSheet.create({
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 25,
  },
  backButtonLabel: {
    fontSize: 18,
    fontWeight: "500",
    letterSpacing: -0.5,
    marginBottom: 1,
    marginLeft: 5,
    opacity: 0.4,
  },
  headerRight: {
    paddingHorizontal: 25,
  },
});
