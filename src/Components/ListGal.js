import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import ItemGal from "./ItemGal";
import { GalStore } from "../store/gal-context";

const ListGal = () => {
  const galStore = useContext(GalStore);
  console.log("ss", galStore.items);
  return (
    <View style={styles.list}>
      <FlatList
        data={galStore.items}
        renderItem={(element) => {
          return (
            <ItemGal
              name={element.item.name}
              id={element.item.id}
              isFav={element.item.isFav}
            />
          );
        }}
      />
      {/* {items.map((item, index) => {
        return (
          <ItemGal
            key={index}
            name={item.name}
            id={item.id}
            isFav={item.isFav}
            removeItem={removeItem}
            favItem={favItem}
          />
        );
      })} */}
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
