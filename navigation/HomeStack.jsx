import React, { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../src/screens/home/Home";
import BookingScreen from "../src/screens/booking/Booking";
import AccountStackScreens from "./AccountStack";
import SearchStackScreens from "./SearchStack";

const HomeStack = createNativeStackNavigator();

const HomeStackScreens = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen component={HomeScreen} name="HomeScreen" />
      <HomeStack.Screen component={BookingScreen} name="BookingScreen" />
      <HomeStack.Screen
        component={AccountStackScreens}
        name="NestedAccountScreens"
      />
      <HomeStack.Screen
        component={SearchStackScreens}
        name="nestedSearchScreen"
      />
    </HomeStack.Navigator>
  );
};
export default HomeStackScreens;
