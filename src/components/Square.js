import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  Text
} from "react-native";

import Colors from "../constants/Colors";

const squareSize = Dimensions.get("window").width / 8;

const Square = props => {

  const darkLightSquare = props.squareColor;

  const squareColor = () => {
   
    if (props.expectedMoveStart) return Colors.darkOrange;
    if (props.expectedMoveEnd) return Colors.lightOrange;

    if (props.activeStartSquare) return Colors.highlightWeak;
    if (props.activeDestinationSquare) return Colors.highlightStrong;

    return darkLightSquare;
  };

  const getPiece = piece => {
    const head = piece[0];
    const tail = piece[1];

    const piecesPNG = "../../assets/piecesPNG";

    switch (head) {
      case "w":
        switch (tail) {
          case "p":
            return require(`${piecesPng}/wp.png`);
          case "k":
            return require(`${piecesPng}/wk.png`);
          case "q":
            return require(`${piecesPng}/wq.png`);
          case "r":
            return require(`${piecesPng}/wr.png`);
          case "b":
            return require(`${piecesPng}/wb.png`);
          case "n":
            return require(`${piecesPng}/wn.png`);
        }

      case "b":
        switch (tail) {
          case "p":
            return require(`${piecesPng}/bp.png`);
          case "k":
            return require(`${piecesPng}/bk.png`);
          case "q":
            return require(`${piecesPng}/bq.png`);
          case "r":
            return require(`${piecesPng}/br.png`);
          case "b":
            return require(`${piecesPng}/bb.png`);
          case "n":
            return require(`${piecesPng}/bn.png`);
        }
    }
  };

  const handlePress = square => {
    props.handleSquarePress(square.id);
  };

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={() => handlePress(props.id)}>
      <View style={{ ...styles.container, backgroundColor: squareColor() }}>
        <Image source={getPiece(props.id.piece)} style={styles.image}/>

        <View style={styles.label}>
          <Text>{props.notation && props.id.piece === "" && props.id.id}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Square;

const styles = StyleSheet.create({
  container: {
    width: squareSize,
    height: squareSize
  },
  image: {
    width: "100%",
    height: "100%"
  },
  label: {
    position: "absolute",
    top: squareSize / 3,
    left: squareSize / 3,
    color: "grey",
    opacity: 0.2
  }
});
