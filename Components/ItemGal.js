import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ItemGal = ({ name }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.itemTXT}>{name}</Text>
    </View>
  );
};

export default ItemGal;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#34e4f7",
    marginVertical: 8,
    height: 42,
    justifyContent: "center",
    padding: 8,
    borderRadius: 8,
  },
  itemTXT: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
