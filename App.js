import { StatusBar } from "expo-status-bar";
import Gal from "./Screens/Gal";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import FavGal from "./Screens/FavGal";
import Welcome from "./Screens/Welcome";
import Home from "./Screens/Home";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export default function App() {
  const Stack = createStackNavigator();
  const Drawer = createDrawerNavigator();
  const BTabs = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Gal" component={Gal} />
        <Stack.Screen name="FavGal" component={FavGal} />
        {/* <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Welcome" component={Welcome} /> */}
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
