import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

import FavoriteStar from "./FavoriteStar";

const HeaderContainer = props => {
  return (
    <View style={styles.titleContainer}>
      <View style={styles.star}>
        <FavoriteStar
          id={props.lineId}
          selected={props.isFavOpening}
          handleStarPress={props.onStarPress}
        />
      </View>

      <View>
        <TouchableOpacity onPress={props.onPress}>
          <Text
            numberOfLines={1}
            style={{ ...styles.lineText, fontWeight: "bold" }}
          >
            {props.lineData.name}
          </Text>
          <Text numberOfLines={1} style={styles.lineText}>
            {props.lineData.shortName}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.playButtons}>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  star: {
    marginRight: 6,
    justifyContent: "center"
  },
  titleContainer: {
    marginTop: 0,
    marginBottom: 15,
    marginHorizontal: 10,
    width: "80%",
    flexDirection: "row"
  },
  settings: {
    marginHorizontal: 35
  },
  lineText: {
    fontSize: 12,
    width: 300
  }
});

export default HeaderContainer;
