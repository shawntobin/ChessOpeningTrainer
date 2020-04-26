import React from "react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import MainBoardScreen from "./src/screens/MainBoardScreen";
import reducer from './src/store/reducers/index'

const store = createStore(reducer);

import { enableScreens } from "react-native-screens";
enableScreens();

export default function App() {
  return (
    <Provider store={store}>
      <MainBoardScreen />
    </Provider>
  );
}
