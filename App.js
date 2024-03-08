import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Gal from "./src/Screens/Gal";
import FavGal from "./src/Screens/FavGal";
import MyProvider from "./src/store/gal-context";

export default function App() {
  const Stack = createStackNavigator();
  const Drawer = createDrawerNavigator();
  const BTabs = createBottomTabNavigator();
  return (
    <MyProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Gal" component={Gal} />
          <Stack.Screen name="FavGal" component={FavGal} />
          {/* <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Welcome" component={Welcome} /> */}
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </MyProvider>
  );
}
