import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { GalStore } from "../store/gal-context";

const ItemGal = ({ name, id, isFav }) => {
  const myStore = useContext(GalStore);
  const remove = () => {
    myStore.removeItem(id);
  };
  const favHandler = () => {
    myStore.favItem(id);
  };
  return (
    <View style={styles.item}>
      <Text style={styles.itemTXT}>{name}</Text>
      <View style={styles.icons}>
        <Pressable onPress={remove}>
          <Ionicons name="trash" size={28} color="red" />
        </Pressable>
        <Pressable onPress={favHandler} style={{ marginLeft: 8 }}>
          <MaterialIcons
            name={isFav ? "favorite" : "favorite-outline"}
            size={28}
            color={isFav ? "red" : "black"}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default ItemGal;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#34e4f7",
    marginVertical: 8,
    height: 42,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    borderRadius: 8,
  },
  itemTXT: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  icons: {
    flexDirection: "row",
  },
});
