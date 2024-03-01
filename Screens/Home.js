import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const Home = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Go TO FavGal"
        onPress={() => {
          navigation.navigate("FavGal");
        }}
      />
      <Button
        title="Go TO Welcome"
        onPress={() => {
          navigation.navigate("Welcome", { name: "From Home" });
        }}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
