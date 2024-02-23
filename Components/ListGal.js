import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ItemGal from "./ItemGal";

const ListGal = ({ items, removeItem, favItem }) => {
  return (
    <View style={styles.list}>
      <FlatList
        data={items}
        renderItem={(element) => {
          return (
            <ItemGal
              name={element.item.name}
              id={element.item.id}
              isFav={element.item.isFav}
              removeItem={removeItem}
              favItem={favItem}
            />
          );
          // console.log(item);
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
