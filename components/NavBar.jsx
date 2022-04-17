import React from "react";
import { Text, View, ScrollView, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-web";

const style = StyleSheet.create({
  nav: {
    height: "10%",
    width: "100%",
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 5,
  },
  img: {
    height: 32,
    width: 32,
  },
});

const NavBar = () => {
  return (
    <View style={style.nav}>
      <TouchableOpacity onPress={() => alert("Pressed")}>
        <Image source={require("../assets/hamburger.svg")} style={style.img} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => alert("Clicked")}>
        <Image source={require("../assets/home.png")} style={style.img} />
      </TouchableOpacity>
    </View>
  );
};

export default NavBar;
