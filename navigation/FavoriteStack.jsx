import React, { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../src/screens/login/Login";
import FavoriteScreen from "../src/screens/favorite/Favorite";
const EventsStack = createNativeStackNavigator();

const EventsStackScreens = () => {
  return (
    <EventsStack.Navigator screenOptions={{ headerShown: false }}>
      <EventsStack.Screen component={FavoriteScreen} name="FavoriteScreen" />
    </EventsStack.Navigator>
  );
};
export default EventsStackScreens;
