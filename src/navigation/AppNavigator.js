import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";

import MainBoardScreen from "../screens/MainBoardScreen";
import OpeningScreen from "../screens/OpeningScreen";
import PlaylistScreen from "../screens/PlaylistScreen";
import SettingsScreen from "../screens/SettingsScreen";

const Drawer = createDrawerNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName={"Chessboard"}
        drawerStyle={{
          width: 280,
          paddingTop: 50
        }}
      >
        <Drawer.Screen
          name="Chessboard"
          component={MainBoardScreen}
          options={{
            drawerIcon: config => <FontAwesome5 name="chess" size={30} />
          }}
        />
        <Drawer.Screen
          name="Opening Database"
          component={OpeningScreen}
          options={{
            drawerIcon: config => <Ionicons name="ios-list-box" size={30} />
          }}
        />
        <Drawer.Screen
          name="Favorite Openings"
          component={PlaylistScreen}
          options={{
            drawerIcon: config => <Ionicons name="ios-star" size={30} />
          }}
        />
        <Drawer.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            drawerIcon: config => <Ionicons name="md-settings" size={32} />
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
