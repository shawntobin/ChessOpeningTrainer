import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Switch } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { toggleNotation } from "../store/actions/pieces";

const Settings = props => {
  const dispatch = useDispatch();
  const isEnabled = useSelector(state => state.board.notationOverlay);

  const handlesSwitch = () => {
    dispatch(toggleNotation(isEnabled));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Settings</Text>
        <TouchableOpacity
          style={styles.hideModalButton}
          activeOpacity={0.4}
          onPress={() => {
            props.navigation.navigate("Chessboard");
          }}
        >
          <Ionicons name="md-close" size={35} />
        </TouchableOpacity>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.menuItem}>Square Color:</Text>
      </View>

      <View style={styles.line} />

      <View style={styles.itemContainer}>
        <Text style={styles.menuItem}>Square Notation Overlay:</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          onValueChange={handlesSwitch}
          value={isEnabled}
        />
      </View>
      <View style={styles.line} />
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: 50,
    marginHorizontal: 30
  },
  line: {
    width: "100%",
    borderBottomWidth: 1,
    borderColor: "grey"
  },
  title: {
    fontSize: 28,
    marginBottom: 30,
    flex: 1
  },
  menuItem: {
    fontSize: 18,
    marginVertical: 20,
    flex: 1
  },
  header: {
    flexDirection: "row"
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center"
  }
});
