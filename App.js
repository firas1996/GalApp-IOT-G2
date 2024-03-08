import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Gal from "./src/Screens/Gal";
import FavGal from "./src/Screens/FavGal";
import MyProvider from "./src/store/gal-context";
import Stack from "./src/navigation/Stack";
import DrowerC from "./src/navigation/DrowerC";

export default function App() {
  // const Stack = createStackNavigator();
  const Drawer = createDrawerNavigator();
  const BTabs = createBottomTabNavigator();
  return (
    <MyProvider>
      <NavigationContainer>
        <Drawer.Navigator drawerContent={DrowerC}>
          <Drawer.Screen name="Stack" component={Stack} />
          {/* <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Welcome" component={Welcome} /> */}
        </Drawer.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </MyProvider>
  );
}
