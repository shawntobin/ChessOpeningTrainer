import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Colors from "../constants/Colors";

const SquareColor = props => {
  const selected = props.selected === props.id;

  const squareColor = id => {
    switch (id) {
      case 1: {
        return Colors.lightBlue;
      }
      case 2: {
        return Colors.lightBrown;
      }
      case 3: {
        return Colors.lightGreen;
      }
      case 4: {
        return Colors.lightRed;
      }
      default:
        Colors.lightBlue;
    }
  };

  const propStyles = {
    backgroundColor: squareColor(props.id),
    borderWidth: selected ? 2.5 : 0,
    borderColor: selected ? "grey" : "white"
  };

  return (
    <TouchableOpacity onPress={() => props.onPress(props.id)} activeOpacity={0.6}>
      <View style={{ ...styles.container, ...propStyles }}></View>
    </TouchableOpacity>
  );
};
export default SquareColor;

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 40,
    borderRadius: 4,
    marginHorizontal: 5
  }
});
