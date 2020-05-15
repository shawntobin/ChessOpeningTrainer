import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

const OpeningGroup = props => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
    >
      <View style={styles.openingContainer}>
        <Image
          style={styles.image}
          source={props.imageName}
        />
        <Text style={styles.text}> {props.openingName}</Text>
        <Text numberOfLines={1} style={styles.subText}> {props.moves} </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 160,
    height: 160,
    borderRadius: 9,
    borderWidth: 0.5,
    marginHorizontal: 8
  },
  openingContainer: {
    flexDirection: "column"
  },
  text: {
    fontWeight: "bold",
    marginTop: 8,
    marginLeft: 4
  },
  subText: {
    fontSize: 9,
    marginLeft: 5,
    color: "grey",
    width: 150
  }
});

export default OpeningGroup;
