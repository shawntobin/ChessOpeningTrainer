import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";

const searchBubble = props => {
  const onPress = () => {
    props.onPress(props.id);
  };

  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
      <View
        style={{
          ...styles.bubble,
          backgroundColor: props.selected ? Colors.darkBlue : "white"
        }}
      >
        <Text
          style={{ ...styles.text, color: props.selected ? "white" : "black" }}
        >
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default searchBubble;

const styles = StyleSheet.create({
  container: {},
  bubble: {
    marginHorizontal: 5,
    padding: 7,
    borderRadius: 20,
    borderWidth: 0.5
  },
  text: {
    fontSize: 12
  }
});
