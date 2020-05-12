import React, { useState, useRef } from "react";
import { Animated, View, StyleSheet, PanResponder, Image } from "react-native";

import { getPiece } from "../utils/helperFunctions";

const PieceDrag = props => {
  const [pieceVisible, setPieceVisible] = useState(1);

  const pan = new Animated.ValueXY();

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {
      setPieceVisible(1);
      pan.setOffset({
        x: pan.x._value,
        y: pan.y._value
      });
    },
    onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }]),

    onPanResponderRelease: () => {
      pan.flattenOffset();
    },
    onPanResponderEnd: () => {
      setPieceVisible(1);
    }
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          transform: [{ translateX: pan.x }, { translateY: pan.y }]
        }}
        {...panResponder.panHandlers}
      >
        <View>
          <Image
            source={getPiece(props.piece)}
            style={{ opacity: pieceVisible }}
          />
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5
  },
  titleText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "bold"
  }
});

export default PieceDrag;
