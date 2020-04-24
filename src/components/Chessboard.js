import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Square from "./Square";
import Colors from "../constants/Colors";

const Chessboard = props => {
  const darkSquare = Colors.dark;
  const lightSquare = Colors.light;

  const boardOrientation = props.boardOrientation;

  let boardLayout;
  let letters;

  if (boardOrientation === "b") {
    boardLayout = props.boardLayout.sort((a, b) => a.seqnnum - b.seqnnum);
    letters = ["A", "B", "C", "D", "E", "F", "G", "H"].reverse();
  } else {
    boardLayout = props.boardLayout.sort((a, b) => b.seqnnum - a.seqnnum);
    letters = ["A", "B", "C", "D", "E", "F", "G", "H"];
  }

  return (
    <View style={styles.container}>
      {letters.map(letter => {
        return (
          <View key={letter} style={styles.columnContainer}>
            {boardLayout
              .filter(square => square.file <= 8 && square.rank == letter)
              .map(square => {
                return (
                  <Square
                    key={square.id}
                    id={square}
                    backgroundColor={
                      square.color == "dark" ? darkSquare : lightSquare
                    }
                    handleSquarePress={props.handleSquarePress}
                  />
                );
              })}
          </View>
        );
      })}
    </View>
  );
};

export default Chessboard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.5
  },
  columnContainer: {
    flexDirection: "column"
  }
});
