import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import Bubble from "./Bubble";

const BubbleContainer = props => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Bubble
          selected={props.id === "VOLUME_A" ? true : false}
          id={"VOLUME_A"}
          title="A) Flank"
          onPress={id => props.handlePress(id)}
        />
        <Bubble
          selected={props.id === "VOLUME_B" ? true : false}
          id={"VOLUME_B"}
          title="B) Semi-Open exc. French"
          onPress={id => props.handlePress(id)}
        />
        <Bubble
          selected={props.id === "VOLUME_C" ? true : false}
          id={"VOLUME_C"}
          title="C) Open & French"
          onPress={id => props.handlePress(id)}
        />
        <Bubble
          selected={props.id === "VOLUME_D" ? true : false}
          id={"VOLUME_D"}
          title="D) Closed, Semi-Closed"
          onPress={id => props.handlePress(id)}
        />
        <Bubble
          selected={props.id === "VOLUME_E" ? true : false}
          id={"VOLUME_E"}
          title="E) Indian Defense"
          onPress={id => props.handlePress(id)}
        />
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
