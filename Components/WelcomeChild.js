import { View, Text } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

const WelcomeChild = () => {
  const route = useRoute();
  return (
    <View>
      <Text>{route.params.name}</Text>
    </View>
  );
};

export default WelcomeChild;
