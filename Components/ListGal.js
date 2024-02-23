import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ItemGal from "./ItemGal";

const ListGal = ({ items }) => {
  return (
    <View style={styles.list}>
      {items.map((item, index) => {
        return <ItemGal key={index} name={item} />;
      })}
    </View>
  );
};

export default ListGal;

const styles = StyleSheet.create({
  list: {
    width: "100%",
    flex: 6,
  },
});
