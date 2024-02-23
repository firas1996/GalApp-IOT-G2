import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
let id = 1;
const AddGal = ({ getData }) => {
  const [data, setData] = useState("");
  const addItem = () => {
    if (data != "") {
      getData({
        id: id,
        name: data,
        isFav: false,
      });
      id++;
      setData("");
    }
  };
  return (
    <View style={styles.add}>
      <TextInput style={styles.imp} onChangeText={setData} value={data} />
      <Pressable style={styles.btn} onPress={addItem}>
        <Text style={styles.txtBtn}>ADD</Text>
      </Pressable>
    </View>
  );
};

export default AddGal;

const styles = StyleSheet.create({
  add: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  imp: {
    borderWidth: 2,
    borderColor: "#dbdbdb",
    height: 42,
    borderRadius: 8,
    width: "70%",
  },
  btn: {
    width: "20%",
    height: 42,
    backgroundColor: "#9002b0",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  txtBtn: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
