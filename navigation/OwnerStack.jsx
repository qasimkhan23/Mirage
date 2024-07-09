import React, { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../src/screens/login/Login";
import OwnerScreen from "../src/screens/owner/Owner";
const ExploreStack = createNativeStackNavigator();

const ExploreStackScreens = () => {
  return (
    <ExploreStack.Navigator screenOptions={{ headerShown: false }}>
      <ExploreStack.Screen component={OwnerScreen} name="OwnerScreen" />
    </ExploreStack.Navigator>
  );
};
export default ExploreStackScreens;
