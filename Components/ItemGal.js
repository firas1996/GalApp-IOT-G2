import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const ItemGal = ({ name, id, removeItem }) => {
  const remove = () => {
    removeItem(id);
  };
  return (
    <View style={styles.item}>
      <Text style={styles.itemTXT}>{name}</Text>
      <Pressable onPress={remove}>
        <Ionicons name="trash" size={28} color="red" />
      </Pressable>
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
});
