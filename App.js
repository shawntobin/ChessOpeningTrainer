import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import boardLayout from "./src/store/reducers/boardLayout";

import MainBoardScreen from "./src/screens/MainBoardScreen";

const rootReducer = combineReducers({
  board: boardLayout
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <MainBoardScreen />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
