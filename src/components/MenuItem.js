import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const MenuItem = props => {
  const handlePress = () => {
    props.onPress();
  };

  return (
    <View style={styles.container}>
      <View style={styles.line} />

      <TouchableOpacity activeOpacity={0.4} onPress={() => handlePress()}>
        <View style={styles.menuItem}>
          <View style={styles.menuIcon}>
            <Ionicons name="md-list" size={35} />
          </View>
          <Text style={styles.menuText}>{props.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginHorizontal: 25
  },
  line: {
    borderBottomWidth: 0.5
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    height: 60
    //justifyContent: 'space-between'
  },
  menuIcon: {
    marginRight: 25
  },
  menuText: {
    fontSize: 20
  }
});

export default MenuItem;
