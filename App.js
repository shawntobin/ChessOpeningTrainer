import React from "react";
import { StyleSheet, View } from "react-native";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import boardLayout from "./src/store/reducers/boardLayout";
import MainBoardScreen from "./src/screens/MainBoardScreen";
import OpeningScreen from "./src/screens/OpeningScreen";
const rootReducer = combineReducers({
  board: boardLayout
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <OpeningScreen />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {}
});
