import React from "react";
import { StyleSheet, View } from "react-native";

import Square from "./Square";
import Colors from "../constants/Colors";

const Chessboard = props => {
  const darkSquare = Colors.dark;
  const lightSquare = Colors.light;

  let boardLayout = props.boardLayout.sort((a, b) => b.seqnnum - a.seqnnum);
  let letters = ["A", "B", "C", "D", "E", "F", "G", "H"];

  if (props.boardOrientation === "b") {
    boardLayout = boardLayout.reverse();
    letters = letters.reverse();
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
    borderWidth: 0.5
  },
  columnContainer: {
    flexDirection: "column"
  }
});
