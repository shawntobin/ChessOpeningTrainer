import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import ChessLogic from "../components/ChessLogic";

const MainBoardScreen = () => {
  return (
    <View style={styles.container}>
      <ChessLogic />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {}
});

export default MainBoardScreen;
