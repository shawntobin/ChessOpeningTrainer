import React from "react";
import { StyleSheet, View } from "react-native";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import boardLayout from "./src/store/reducers/boardLayout";
import MainBoardScreen from "./src/screens/MainBoardScreen";
import OpeningScreen from "./src/screens/OpeningScreen";
import AppNavigator from "./src/navigation/AppNavigator";
const rootReducer = combineReducers({
  board: boardLayout
});

const store = createStore(rootReducer);

import { enableScreens } from 'react-native-screens';
enableScreens();


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
  container: {}
});
