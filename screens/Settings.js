import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

const theme = "light";

export default function Settings() {
  const SettingItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.settingItem}>
        <View>
          <Text style={styles.settingItemTitle}>{item.title}</Text>
          <Text style={styles.settingItemDescription}>{item.description}</Text>
        </View>
        {item.type && item.type === "checkbox" && item.key == theme && (
          <View>
            <Feather name="check" size={20} />
          </View>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Theme</Text>
        <SettingItem
          item={{
            title: "Dark Theme",
            description: "Join the Dark Side!",
            type: "checkbox",
            key: "dark",
          }}
        />
        <SettingItem
          item={{
            title: "Light Theme",
            description: "Let There be Light!",
            type: "checkbox",
            key: "light",
          }}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Feedback</Text>
        <SettingItem
          item={{
            title: "Report an Issue",
            description: "Facing an issue? Report and we'll look into it.",
          }}
        />
        <SettingItem
          item={{
            title: "Review on Playstore",
            description: "Enjoying the app? Leave a review on the app store.",
          }}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Mono</Text>
        <SettingItem
          item={{
            title: "About Mono",
            description: "Read a bit more about the app",
          }}
        />
        <SettingItem
          item={{
            title: "The Team",
            description: "Get to know the team that made Mono a reality.",
          }}
        />
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
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 24,
    marginBottom: 20,
    letterSpacing: -1,
  },
  settingItem: {
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    opacity: 0.5,
  },
  settingItemTitle: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 3,
  },
  settingItemDescription: {
    fontSize: 12,
  },
});
