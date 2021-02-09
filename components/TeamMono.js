import { Feather } from "@expo/vector-icons";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";

export default function TeamMono() {
  const TeamMember = ({ member }) => {
    return (
      <View style={styles.teamMember}>
        <View style={styles.teamMemberIcon}>
          <Feather
            name={
              member.role.toLowerCase() === "developer" ? "code" : "pen-tool"
            }
            size={20}
          />
        </View>
        <View style={styles.teamMemberDetails}>
          <Text style={styles.teamMemberName}>{member.name}</Text>
          <Text style={styles.teamMemberRole}>{member.role}</Text>
        </View>
        <TouchableOpacity
          style={styles.teamMemberSocial}
          onPress={() => Linking.openURL(member.link)}
        >
          <Feather
            name={member.icon}
            size={20}
            style={{ opacity: 0.6 }}
            color={"#19456b"}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <View style={styles.header}>
        <View style={styles.iconWrap}></View>
        <Text style={styles.headerTitle}>Mono - The Team</Text>
      </View>
      <View style={styles.content}>
        <TeamMember
          member={{
            name: "David Adegoke",
            role: "Developer",
            icon: "github",
            link: "https://github.com/dhaveed",
          }}
        />
        <TeamMember
          member={{
            name: "Satwik Gawand",
            role: "Designer",
            icon: "dribbble",
            link: "https://dribbble.com/rkfd",
          }}
        />
      </View>
      <Text style={styles.versionCode}>
        &copy; {new Date().getFullYear()} Mono Weather
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingVertical: 10,
    alignItems: "center",
    marginBottom: 25,
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
  teamMember: {
    paddingVertical: 10,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  teamMemberIcon: {
    marginRight: 15,
  },
  teamMemberDetails: {
    flex: 1,
  },
  teamMemberName: {
    fontWeight: "600",
    fontSize: 18,
    marginBottom: 3,
  },
  teamMemberRole: {
    fontSize: 16,
    color: "#30475e",
    opacity: 0.4,
  },
  teamMemberSocial: {
    backgroundColor: "#d3e0ea70",
    padding: 10,
    borderRadius: 15,
  },
  versionCode: {
    position: "relative",
    alignSelf: "center",
    bottom: -20,
    fontWeight: "500",
    opacity: 0.3,
  },
});
