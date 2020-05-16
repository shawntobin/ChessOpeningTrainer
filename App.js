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
  const openings = "./assets/openings/";

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
      require(`${piecesPng}bn.png`),

      require(`${openings}alekhine.png`),
      require(`${openings}benoni.png`),
      require(`${openings}bishops.png`),
      require(`${openings}carokann.png`),
      require(`${openings}catalan.png`),
      require(`${openings}dutch.png`),
      require(`${openings}english.png`),
      require(`${openings}fourknights.png`),
      require(`${openings}french1.png`),
      require(`${openings}grunfeld.png`),
      require(`${openings}italian.png`),
      require(`${openings}kingsgambit.png`),
      require(`${openings}kingsindian.png`),
      require(`${openings}londonsystem.png`),
      require(`${openings}nimzoindian.png`),
      require(`${openings}philidor.png`),
      require(`${openings}queensgambit.png`),
      require(`${openings}russian.png`),
      require(`${openings}ruylopez1.png`),
      require(`${openings}scandinavian.png`),
      require(`${openings}scotch.png`),
      require(`${openings}semislav.png`),
      require(`${openings}sicilian.png`),
      require(`${openings}slav.png`),
      require(`${openings}tarrasch.png`),
      require(`${openings}vienna.png`)
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
