import React from "react";
import { StyleSheet, View } from "react-native";

import Square from "./Square";
import Colors from "../constants/Colors";
import _ from "lodash";
import { useSelector } from "react-redux";

const Chessboard = props => {
  const selectedColor = useSelector(state => state.settings.darkSquareColor);

  const squareColor = id => {
    switch (id) {
      case 1: {
        return Colors.lightBlue;
      }
      case 2: {
        return Colors.lightBrown;
      }
      case 3: {
        return Colors.lightGreen;
      }
      case 4: {
        return Colors.lightRed;
      }
      default:
        Colors.lightBlue;
    }
  };

  const darkSquare = squareColor(selectedColor);
  const lightSquare = Colors.light;

  const activeSquare = useSelector(state => state.board.selectedPiece);
  const destinationSquare = useSelector(state => state.board.destinationSquare);

  let boardLayout = props.boardLayout.sort((a, b) => b.seqnnum - a.seqnnum);
  let letters = ["A", "B", "C", "D", "E", "F", "G", "H"];

  if (props.boardOrientation === "b") {
    boardLayout = boardLayout.reverse();
    letters = letters.reverse();
  }

  const handleSquarePress = square => {
    props.handleSquarePress(square);
  };

  const square = sq =>
    <Square
      notation={props.notation}
      key={sq.id}
      id={sq}
      squareColor={ sq.color == "dark" ? darkSquare : lightSquare }
      activeStartSquare={
        activeSquare === sq.id &&
        !_.isNull(activeSquare)
      }
      activeDestinationSquare={
        destinationSquare === sq.id &&
        !_.isNull(destinationSquare)
      }
      expectedMoveStart={
        props.expectedMoveStart === sq.id &&
        !_.isNull(props.expectedMoveStart)
      }
      expectedMoveEnd={
        props.expectedMoveEnd === sq.id &&
        !_.isNull(props.expectedMoveEnd)
      }
      handleSquarePress={ handleSquarePress }
    />

  return (
    <View style={styles.container}>
      letters.map(letter =>
        <View key={letter} style={styles.columnContainer}>
          boardLayout
            .filter(sq => sq.file <= 8 && sq.rank == letter)
            .map(square)
        </View>
      )
    </View>
  );
};

export default Chessboard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderWidth: 0.5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  columnContainer: {
    flexDirection: "column"
  }
});
