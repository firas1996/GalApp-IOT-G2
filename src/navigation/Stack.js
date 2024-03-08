import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Gal from "../Screens/Gal";
import FavGal from "../Screens/FavGal";

const Stack = () => {
  const stack = createStackNavigator();
  return (
    <stack.Navigator>
      <stack.Screen name="Gal" component={Gal} />
      <stack.Screen name="FavGal" component={FavGal} />
    </stack.Navigator>
  );
};

export default Stack;
