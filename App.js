import React from "react";
import { createStore} from "redux";
import { Provider } from "react-redux";
import {AppLoading} from 'expo'

import MainBoardScreen from "./src/screens/MainBoardScreen";
import reducer from "./src/store/reducers/index";

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



/*
  if (!isReady) {
    return (
      <AppLoading
        startAsync={this._cacheResourcesAsync}
        onFinish={() => this.setState({ isReady: true })}
        onError={console.warn}
      />
    );
  }
  */