import React, { useState } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { AppLoading } from "expo";
import { Asset } from "expo-asset";

import reducer from "./src/store/reducers/index";
import AppNavigator from "./src/navigation/AppNavigator";

const store = createStore(reducer);

import { enableScreens } from "react-native-screens";
enableScreens();

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
      <AppNavigator />
    </Provider>
  );
}

/*
  require("../../assets/piecesPNG/wp.png")  
  require("../../assets/piecesPNG/wk.png")
  require("../../assets/piecesPNG/wq.png")
  require("../../assets/piecesPNG/wr.png")  
  require("../../assets/piecesPNG/wb.png")  
  require("../../assets/piecesPNG/wn.png")
  require("../../assets/piecesPNG/bp.png")
  require("../../assets/piecesPNG/bk.png")
  require("../../assets/piecesPNG/bq.png")
  require("../../assets/piecesPNG/br.png")
  require("../../assets/piecesPNG/bb.png")
  require("../../assets/piecesPNG/bn.png")
*/
