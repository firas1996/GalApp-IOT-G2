import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import ListGal from "../Components/ListGal";
import AddGal from "../Components/AddGal";
import { GalStore } from "../store/gal-context";

const Gal = ({ navigation }) => {
  const goToFav = () => {
    navigation.navigate("FavGal");
  };
  return (
    <View style={styles.container}>
      <AddGal />
      <Button title="FavGal" onPress={goToFav} />
      <ListGal />
    </View>
  );
};

export default Gal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "95%",
    alignSelf: "center",
    marginTop: 52,
    marginBottom: 28,
  },
});
