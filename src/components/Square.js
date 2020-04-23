import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity
} from "react-native";

const squareSize = Dimensions.get("window").width / 8;

const Square = props => {
  return (
    <TouchableOpacity>
      <View {...props} style={styles.container}>
        <Text></Text>
      </View>
    </TouchableOpacity>
  );
};

export default Square;

const styles = StyleSheet.create({
  container: {
    width: squareSize,
    height: squareSize,
    borderWidth: 0.5
  }
});
