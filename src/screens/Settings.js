import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Switch } from "react-native";
import SquareColor from "../components/SquareColor";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { toggleNotation, changeSquareColor } from "../store/actions/settings";


const Settings = props => {
  //const [selectedColor, setSelectedColor] = useState(1);

  const dispatch = useDispatch();
  const notationEnabled = useSelector(state => state.settings.notationOverlay);
  const selectedColor = useSelector(state => state.settings.darkSquareColor);

  const handleColorChange = id => {
 //   setSelectedColor(id);
    dispatch(changeSquareColor(id));
  };

  const handlesSwitch = () => {
    dispatch(toggleNotation(notationEnabled));
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
        <Text style={styles.menuItem}>Theme:</Text>
        <View style={{ flexDirection: "row" }}>
          <SquareColor
            id={1}
            onPress={(id) => handleColorChange(id)}
            selected={selectedColor}
          />
          <SquareColor
            id={2}
            onPress={(id) => handleColorChange(id)}
            selected={selectedColor}
          />
          <SquareColor
            id={3}
            onPress={(id) => handleColorChange(id)}
            selected={selectedColor}
          />
          <SquareColor
            id={4}
            onPress={(id) => handleColorChange(id)}
            selected={selectedColor}
          />
        </View>
      </View>

      <View style={styles.line} />

      <View style={styles.itemContainer}>
        <Text style={styles.menuItem}>Square Notation Overlay:</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          onValueChange={handlesSwitch}
          value={notationEnabled}
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
    flex: 1,
    fontWeight: 'bold'
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
