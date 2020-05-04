import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import MenuItem from "../components/MenuItem";

const Menu = props => {
  return (
    <View style={styles.container}>
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
    flex: 1,
    //alignItems: "center",
    justifyContent: "center"
  }
});
