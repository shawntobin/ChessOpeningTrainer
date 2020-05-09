import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const FavoriteStar = props => {
  return (
    <View>
      <TouchableOpacity onPress={() => props.handleStarPress(props.id)}>
        {props.selected ? (
          <Ionicons name="ios-star" size={20} />
        ) : (
          <Ionicons name="ios-star-outline" size={20} />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default FavoriteStar;
