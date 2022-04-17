import { Text, View, StyleSheet, ScrollView, Image } from "react-native";
import NavBar from "../components/NavBar";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";
import React from "react";
import BottomNavigationBar from "../components/BottomNavigationBar/BottomNavigationBar";

const style = StyleSheet.create({
  view: {
    width: "100%",
    height: 300,
    borderRadius: 30,
    backgroundColor: "#f5f5f5",
    marginLeft: 0,
    overflow: "hidden",
    position: "relative",
    // marginTop: 150,
  },
  heading: {
    color: "gray",
    fontSize: 36,
    fontWeight: "400",
    marginLeft: 40,
    marginTop: 50,
    fontFamily: "Poppins_400Regular",
    position: "absolute",
  },
  name: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    // marginLeft: 40,
    fontFamily: "Poppins_400Regular",
    position: "absolute",
    bottom: 20,
    left: 20,
  },
  cardImg: {
    height: "100%",
    width: "100%",
  },
  streakCard: {
    width: 130,
    height: 130,
    borderRadius: 30,
    position: "relative",
    // border: "1px solid black",
    overflow: "hidden",
    marginTop: 30,
    backgroundColor: "#b2d2d9",
  },
});

const Card = () => {
  return (
    <View style={[style.view, style.shadowProp]}>
      <Image source={require("../assets/home1.jpg")} style={style.cardImg} />
      <Text style={style.name}>
        Workout at <br /> Home
      </Text>
    </View>
  );
};

const HomeScreen = () => {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        padding: 15,
        width: "100%",
        height: "100%",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}
    >
      <NavBar />
      <Card />
      <BottomNavigationBar />
    </ScrollView>
  );
};

export default HomeScreen;
