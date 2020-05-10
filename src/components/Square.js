import React from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  Text
} from "react-native";
import Colors from "../constants/Colors";

import { getPiece } from "../utils/helperFunctions";

const squareSize = Dimensions.get("window").width / 8;

const Square = props => {
  const squareColor = () => {
    if (props.expectedMoveStart) return Colors.darkOrange;
    if (props.expectedMoveEnd) return Colors.lightOrange;

    if (props.activeStartSquare) return Colors.highlightWeak;
    if (props.activeDestinationSquare) return Colors.highlightStrong;

    return props.squareColor;
  };

  const handlePress = square => {
    props.handleSquarePress(square.id);
  };

  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => handlePress(props.id)}
      >
        <View style={{ ...styles.container, backgroundColor: squareColor() }}>
          <Image source={getPiece(props.id.piece)} style={styles.image} />

          <View style={styles.label}>
            <Text>
              {props.notation && props.id.piece === "" && props.id.id}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
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
