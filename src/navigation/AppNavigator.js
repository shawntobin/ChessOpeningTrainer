import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import MainBoardScreen from "../screens/MainBoardScreen";
import OpeningScreen from "../screens/OpeningScreen";
import PlaylistScreen from "../screens/PlaylistScreen";
import Menu from "../screens/Menu";
import Settings from "../screens/Settings";

const Drawer = createDrawerNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName={"Chessboard"}
        drawerStyle={{
          //backgroundColor: "#c6cbef",
          width: 280
        }}
      >
        <Drawer.Screen name="Chessboard" component={MainBoardScreen} />
        <Drawer.Screen name="Opening Database" component={OpeningScreen} />
        <Drawer.Screen name="Favorite Openings" component={PlaylistScreen} />
        <Drawer.Screen name="Settings" component={Settings} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;
