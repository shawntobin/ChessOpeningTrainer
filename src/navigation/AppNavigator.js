

import { createDrawerNavigator } from '@react-navigation/drawer';

import MainBoardScreen from "../screens/MainBoardScreen"
import OpeningScreen from "../screens/OpeningScreen";

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="MainScreen" component={MainBoardScreen} />
      <Drawer.Screen name="OpeningScreen" component={OpeningScreen} />
    </Drawer.Navigator>
  );
}
export default createAppContainer(AppNavigator);
