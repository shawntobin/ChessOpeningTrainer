import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import ChessLogic from "../components/ChessLogic";


const MainBoardScreen = () => {
  return (
    <View style={styles.container}>
      <ChessLogic/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 150
  }
});

export default MainBoardScreen;
