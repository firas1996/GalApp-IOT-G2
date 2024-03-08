import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import ListGal from "../Components/ListGal";
import ItemGal from "../Components/ItemGal";
import { GalStore } from "../store/gal-context";

const FavGal = () => {
  const galStore = useContext(GalStore);
  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList
          data={galStore.favItems}
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
      </View>
    </View>
  );
};

export default FavGal;

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
  list: {
    width: "100%",
    flex: 6,
  },
});
