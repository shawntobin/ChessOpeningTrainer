import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import Bubble from "./Bubble";

const BubbleContainer = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Bubble title="A) Flank" />
        <Bubble title="B) Semi-Open exc. French" />
        <Bubble title="C) Open & French" />
        <Bubble title="D) Closed, Semi-Closed" />
        <Bubble title="E) Indian Defense" />
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
