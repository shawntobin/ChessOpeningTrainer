import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import MenuItem from "../components/MenuItem";

const Menu = props => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.hideModalButton}
          activeOpacity={0.4}
          onPress={() => {
            props.navigation.navigate("Main");
          }}
        >
          <Ionicons name="md-close" size={35} />
        </TouchableOpacity>
      </View>

      <MenuItem
        title="Opening Database"
        onPress={() => props.navigation.navigate("Openings")}
      />
      <MenuItem
        title="Favorite Openings"
        onPress={() => props.navigation.navigate("Playlist")}
      />
      <MenuItem
        title="Settings"
        onPress={() => props.navigation.navigate("Settings")}
      />
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    //alignItems: "center",
    //justifyContent: "center"
  },
  header: {
    marginBottom: 100,
    marginTop: 40,
    marginHorizontal: 30,
    justifyContent: "flex-end",
    alignItems: "flex-end"
  }
});
