import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import { SET_THEME } from "../redux/action-types";
import { connect } from "react-redux";

const theme = "light";

const mapStateToProps = (state) => {
  const { ui } = state;
  return {
    ui,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setTheme: (theme) => dispatch({ type: SET_THEME, payload: theme }),
  };
};

function Settings(props) {
  const { colors } = useTheme();

  const changeTheme = (theme) => {
    const { setTheme } = props;
    setTheme(theme);
  };

  const SettingItem = ({ item }) => {
    const { colors } = useTheme();
    return (
      <TouchableOpacity
        style={styles.settingItem}
        onPress={item.action}
      >
        <View>
          <Text style={[styles.settingItemTitle, { color: colors.text }]}>
            {item.title}
          </Text>
          <Text style={[styles.settingItemDescription, { color: colors.text }]}>
            {item.description}
          </Text>
        </View>
        {item.type && item.type === "checkbox" && item.value == props.ui.theme && (
          <View>
            <Feather name="check" size={20} color={colors.text} />
          </View>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>Theme</Text>
        <SettingItem
          item={{
            title: "Dark Theme",
            description: "Join the Dark Side!",
            type: "checkbox",
            value: "dark",
            action: () => changeTheme("dark")
          }}
        />
        <SettingItem
          item={{
            title: "Light Theme",
            description: "Let There be Light!",
            type: "checkbox",
            value: "light",
            action: () => changeTheme("light")
          }}
        />
      </View>
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          Feedback
        </Text>
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
        <Text style={[styles.sectionTitle, { color: colors.text }]}>Mono</Text>
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
    backgroundColor: "white",
    paddingVertical: 40,
    paddingHorizontal: 30,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 26,
    marginBottom: 20,
    letterSpacing: -1,
  },
  settingItem: {
    marginBottom: 24,
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

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
