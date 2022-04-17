import { View, Text } from "react-native";
import React from "react";
import { style } from "./BottomNavigationBarStyle";

const BottomNavigationBar = () => {
  return (
    <View style={style.BottomNavigation}>
      <Text style={{ color: "black" }}>Hello world</Text>
    </View>
  );
};

export default BottomNavigationBar;
