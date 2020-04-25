import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const searchBubble = props => {
  const [selected, setSelected] = useState(false);
  const handleSelect = () => {
    setSelected(state => !state);
  };

  return (
    <TouchableOpacity activeOpacity={0.6} onPress={handleSelect}>
      <View style={{...styles.bubble, backgroundColor: selected ? 'teal' : 'white'}}>
        <Text style={{...styles.text, color: selected ? 'white' : 'black' }}>{props.title}</Text>
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
