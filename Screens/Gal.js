import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import ListGal from "../Components/ListGal";
import AddGal from "../Components/AddGal";

const Gal = ({ navigation }) => {
  const [items, setItems] = useState([]);
  const getData = (x) => {
    setItems([x, ...items]);
  };
  const removeItem = (id) => {
    setItems(
      items.filter((item) => {
        return item.id != id;
      })
    );
  };
  const favItem = (id) => {
    setItems(
      items.map((item) => {
        return item.id == id ? { ...item, isFav: !item.isFav } : item;
      })
    );
  };
  console.log(items);
  const goToFav = () => {
    const favItems = items.filter((item) => {
      return item.isFav == true;
    });
    navigation.navigate("FavGal", {
      favItems: favItems,
      removeItem: removeItem,
      favItem: favItem,
    });
  };
  return (
    <View style={styles.container}>
      <AddGal getData={getData} />
      <Button title="FavGal" onPress={goToFav} />
      <ListGal items={items} removeItem={removeItem} favItem={favItem} />
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
