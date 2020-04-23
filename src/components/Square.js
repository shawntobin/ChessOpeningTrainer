import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  Button
} from "react-native";

const squareSize = Dimensions.get("window").width / 8.5;

const Square = props => {
  const getPiece = piece => {
    switch (piece) {
      case "wp":
        return require("../../assets/piecesPNG/wp.png");
      case "wk":
        return require("../../assets/piecesPNG/wk.png");
      case "wq":
        return require("../../assets/piecesPNG/wq.png");
      case "wr":
        return require("../../assets/piecesPNG/wr.png");
      case "wb":
        return require("../../assets/piecesPNG/wb.png");
      case "wn":
        return require("../../assets/piecesPNG/wn.png");
      case "bp":
        return require("../../assets/piecesPNG/bp.png");
      case "bk":
        return require("../../assets/piecesPNG/bk.png");
      case "bq":
        return require("../../assets/piecesPNG/bq.png");
      case "br":
        return require("../../assets/piecesPNG/br.png");
      case "bb":
        return require("../../assets/piecesPNG/bb.png");
      case "bn":
        return require("../../assets/piecesPNG/bn.png");
    }
  };

  const handlePress = id => {
    props.handleSquarePress(id);
  };

  return (
    <TouchableOpacity onPress={() => handlePress(props.id)}>
      <View {...props} style={styles.container}>
        <Image source={getPiece(props.id.piece)} style={styles.image} />
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
  }
});
