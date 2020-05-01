import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import MainBoardScreen from "../screens/MainBoardScreen";
import OpeningScreen from "../screens/OpeningScreen";
import PlaylistScreen from "../screens/PlaylistScreen";
import Menu from "../screens/Menu";

const Drawer = createDrawerNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName={"Main"}
        drawerStyle={{
          backgroundColor: "#c6cbef",
          width: 240
        }}
      >
        <Drawer.Screen name="Main" component={MainBoardScreen} />
        <Drawer.Screen name="Openings" component={OpeningScreen} />
        <Drawer.Screen name="Playlist" component={PlaylistScreen} />
        <Drawer.Screen name="Menu" component={Menu} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;
