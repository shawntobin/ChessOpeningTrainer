import React from "react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import boardLayout from "./src/store/reducers/boardLayout";
import MainBoardScreen from "./src/screens/MainBoardScreen";
const rootReducer = combineReducers({
  board: boardLayout
});

const store = createStore(rootReducer);

import { enableScreens } from "react-native-screens";
enableScreens();

export default function App() {
  return (
    <Provider store={store}>
      <MainBoardScreen />
    </Provider>
  );
}
