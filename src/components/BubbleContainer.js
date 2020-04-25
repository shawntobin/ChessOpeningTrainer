import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import Bubble from "./Bubble";

const BubbleContainer = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Bubble title="Ruy Lopez" />
        <Bubble title="French" />
        <Bubble title="Vienna" />
        <Bubble title="Philidor" />
        <Bubble title="Scotch" />
        <Bubble title="King's Pawn" />
      </ScrollView>
    </View>
  );
};

export default BubbleContainer;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  }
});
