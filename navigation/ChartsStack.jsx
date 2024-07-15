import React, { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChartsScreen from "../src/screens/Charts/Charts";
import ProfileScreen from "../src/screens/Profile/profile";
const ChartsStack = createNativeStackNavigator();

const ChartsStackScreens = () => {
   return (
      <ChartsStack.Navigator screenOptions={{ headerShown: false }}>
         <ChartsStack.Screen component={ChartsScreen} name="ChartScreen" />
         <ChartsStack.Screen component={ProfileScreen} name="ProfileScreen" />
      </ChartsStack.Navigator>
   );
};
export default ChartsStackScreens;
