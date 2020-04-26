import React from "react";
import { View, Text, Slider, StyleSheet } from "react-native";

const SliderContainer = props => {
  return (
    <View style={styles.filterContainer}>
      <Text style={styles.label}># Moves: </Text>

      <Slider
        style={{ width: 200, height: 40 }}
        minimumValue={1}
        maximumValue={30}
        minimumTrackTintColor="grey"
        maximumTrackTintColor="grey"
        onSlidingComplete={props.handleSliderChange}
        //onValueChange={moves => setFilteredMoves(moves)}
        step={1}
        value={props.filteredMoves}
      />
      <Text style={styles.moves}>{props.filteredMoves}+</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20
  },
  label: {
    fontWeight: "bold",
    marginRight: 10
  },
  moves: {
    marginLeft: 20,
    fontSize: 16,
    color: "black"
  }
});

export default SliderContainer;
