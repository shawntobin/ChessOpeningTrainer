import React, { useState } from "react";
import { AsyncStorage } from "react-native";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import { PersistGate } from "redux-persist/integration/react";
import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";


import AppNavigator from "./src/navigation/AppNavigator";
import rootReducer from "./src/store/reducers/index";

const persistConfig = {
  key: "root",
  storage: AsyncStorage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

let store = createStore(persistedReducer, applyMiddleware(ReduxThunk));
let persistor = persistStore(store);

export default function App() {
  const [isReady, setIsReady] = useState(false);


  const _cacheResourcesAsync = async () => {
    const images = [
      require("./assets/piecesPNG/wp.png"),
      require("./assets/piecesPNG/wk.png"),
      require("./assets/piecesPNG/wq.png"),
      require("./assets/piecesPNG/wr.png"),
      require("./assets/piecesPNG/wb.png"),
      require("./assets/piecesPNG/wn.png"),
      require("./assets/piecesPNG/bp.png"),
      require("./assets/piecesPNG/bk.png"),
      require("./assets/piecesPNG/bq.png"),
      require("./assets/piecesPNG/br.png"),
      require("./assets/piecesPNG/bb.png"),
      require("./assets/piecesPNG/bn.png")
    ];
    const cacheImages = images.map(image => {
      return Asset.fromModule(image).downloadAsync();
    });
    return Promise.all(cacheImages);
  };

  if (!isReady) {
    return (
      <AppLoading
        startAsync={_cacheResourcesAsync}
        onFinish={() => setIsReady(true)}
      />
    );
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNavigator />
      </PersistGate>
    </Provider>
  );
}
