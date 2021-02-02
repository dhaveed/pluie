import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const cities = [
  {
    id: 1,
    name: "Mumbai",
    temp: "22",
    condition: "Light Drizzle",
    type: "cloud-drizzle",
  },
  {
    id: 2,
    name: "Goa",
    temp: "26",
    condition: "Sunny",
    type: "sun",
  },
];

export default function Cities() {
  const CityItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.cityItemWrap}>
        <View>
          <Text style={styles.cityName}>{item.name}</Text>
          <Text style={styles.cityTemp}>{item.temp}&deg;C</Text>
          <Text style={styles.cityCondition}>{item.condition}</Text>
        </View>
        <View>
          <Feather name={item.type} size={36} />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList data={cities} renderItem={(item) => CityItem(item)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 30,
    backgroundColor: "white"
  },
  cityItemWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 40,
  },
  cityName: {
    fontWeight: "600",
    fontSize: 24,
    marginBottom: 3,
  },
  cityTemp: {
    fontSize: 16,
    marginBottom: 1,
    fontWeight: "400",
  },
  cityCondition: {
    fontSize: 13,
    fontWeight: "400",
  },
});
