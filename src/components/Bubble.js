import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const searchBubble = props => {
  const [selected, setSelected] = useState(false);

  const onPress = () => {
    props.onPress(props.id);
  };

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
    >
      <View
        style={{
          ...styles.bubble,
          backgroundColor: props.selected ? "teal" : "white"
        }}
      >
        <Text style={{ ...styles.text, color: selected ? "white" : "black" }}>
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
    marginTop: 20,
    borderRadius: 20,
    borderWidth: 0.5
  },
  text: {
    fontSize: 12
  }
});
