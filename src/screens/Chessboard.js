import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Square from "../components/Square";
import BOARDLAYOUT from "../data/boardLayout";
import Colors from "../constants/Colors";

const Chessboard = () => {
  const darkSquare = Colors.dark;
  const lightSquare = Colors.light;

  return (
    <View style={styles.container}>
      <View style={styles.columnContainer}>
        {BOARDLAYOUT.filter(
          square => square.file <= 8 && square.rank == "A"
        ).map(square => {
          return (
            <Square
              backgroundColor={
                square.color == "dark" ? darkSquare : lightSquare
              }
            />
          );
        })}
      </View>
      <View style={styles.columnContainer}>
        {BOARDLAYOUT.filter(
          square => square.file <= 8 && square.rank == "B"
        ).map(square => {
          return (
            <Square
              backgroundColor={
                square.color == "dark" ? darkSquare : lightSquare
              }
            />
          );
        })}
      </View>
      <View style={styles.columnContainer}>
        {BOARDLAYOUT.filter(
          square => square.file <= 8 && square.rank == "C"
        ).map(square => {
          return (
            <Square
              backgroundColor={
                square.color == "dark" ? darkSquare : lightSquare
              }
            />
          );
        })}
      </View>
      <View style={styles.columnContainer}>
        {BOARDLAYOUT.filter(
          square => square.file <= 8 && square.rank == "D"
        ).map(square => {
          return (
            <Square
              backgroundColor={
                square.color == "dark" ? darkSquare : lightSquare
              }
            />
          );
        })}
      </View>
      <View style={styles.columnContainer}>
        {BOARDLAYOUT.filter(
          square => square.file <= 8 && square.rank == "E"
        ).map(square => {
          return (
            <Square
              backgroundColor={
                square.color == "dark" ? darkSquare : lightSquare
              }
            />
          );
        })}
      </View>
      <View style={styles.columnContainer}>
        {BOARDLAYOUT.filter(
          square => square.file <= 8 && square.rank == "F"
        ).map(square => {
          return (
            <Square
              backgroundColor={
                square.color == "dark" ? darkSquare : lightSquare
              }
            />
          );
        })}
      </View>
      <View style={styles.columnContainer}>
        {BOARDLAYOUT.filter(
          square => square.file <= 8 && square.rank == "G"
        ).map(square => {
          return (
            <Square
              backgroundColor={
                square.color == "dark" ? darkSquare : lightSquare
              }
            />
          );
        })}
      </View>
      <View style={styles.columnContainer}>
        {BOARDLAYOUT.filter(
          square => square.file <= 8 && square.rank == "H"
        ).map(square => {
          return (
            <Square
              backgroundColor={
                square.color == "dark" ? darkSquare : lightSquare
              }
            />
          );
        })}
      </View>
    </View>
  );
};

export default Chessboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  columnContainer: {
    flexDirection: "column"
  }
});
