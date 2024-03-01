import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import ListGal from "../Components/ListGal";

const FavGal = ({ route }) => {
  return (
    <View style={styles.container}>
      <ListGal
        items={route.params.favItems}
        removeItem={route.params.removeItem}
        favItem={route.params.favItem}
      />
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
});
