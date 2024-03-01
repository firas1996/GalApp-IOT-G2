import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import WelcomeChild from "../Components/WelcomeChild";

const Welcome = () => {
  const route = useRoute();
  console.log(route.params.name);
  const navigation = useNavigation();
  return (
    <View>
      <Button
        title="Go TO FavGal"
        onPress={() => {
          navigation.navigate("FavGal");
        }}
      />
      <Button
        title="Go TO Home"
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
      {/* <Text>{route.params.name}</Text> */}
      <WelcomeChild />
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({});
