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

  const piecesPng = "./assets/piecesPNG/";

  const _cacheResourcesAsync = async () => {
    const images = [
      require(`${piecesPng}wp.png`),
      require(`${piecesPng}wk.png`),
      require(`${piecesPng}wq.png`),
      require(`${piecesPng}wr.png`),
      require(`${piecesPng}wb.png`),
      require(`${piecesPng}wn.png`),
      require(`${piecesPng}bp.png`),
      require(`${piecesPng}bk.png`),
      require(`${piecesPng}bq.png`),
      require(`${piecesPng}br.png`),
      require(`${piecesPng}bb.png`),
      require(`${piecesPng}bn.png`)
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
