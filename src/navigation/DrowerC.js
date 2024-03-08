import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { DrawerItem } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";

const DrowerC = () => {
  const navigation = useNavigation();
  return (
    <View style={{ paddingTop: 100 }}>
      <DrawerItem
        label="Gal"
        onPress={() => {
          navigation.navigate("Gal");
        }}
      />
      <DrawerItem
        label="FavGal"
        onPress={() => {
          navigation.navigate("FavGal");
        }}
      />
    </View>
  );
};

export default DrowerC;

const styles = StyleSheet.create({});
