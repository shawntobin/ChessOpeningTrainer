import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import MainBoardScreen from "../screens/MainBoardScreen";
import OpeningScreen from "../screens/OpeningScreen";

const Drawer = createDrawerNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
      initialRouteName={"Main"}
        drawerStyle={{
            backgroundColor: '#c6cbef',
            width: 240,
          }}
      >
        <Drawer.Screen name="Main" component={MainBoardScreen} />
        <Drawer.Screen name="Openings" component={OpeningScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;
