import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import { useSelector } from "react-redux";

import OpeningContainer from "../components/OpeningContainer";

const CategoryLinesScreen = props => {
  const openings = useSelector(state => state.categories.openings);

  return (
    <View style={styles.container}>
      <OpeningContainer
        filteredData={openings}
        buttonPush={() => {}}
        showRemoveButtons={false}
      />
      <Button
        onPress={() => props.navigation.navigate("Chessboard")}
        title="go back"
      />
    </View>
  );
};

export default CategoryLinesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 250
  }
});
