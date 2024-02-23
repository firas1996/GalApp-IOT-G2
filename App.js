import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AddGal from "./Components/AddGal";
import ListGal from "./Components/ListGal";
import { useState } from "react";

export default function App() {
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
  return (
    <View style={styles.container}>
      <AddGal getData={getData} />
      <ListGal items={items} removeItem={removeItem} favItem={favItem} />
      <StatusBar style="auto" />
    </View>
  );
}

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
