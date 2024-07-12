import React, { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../src/screens/login/Login";

const AuthStack = createNativeStackNavigator();

const AuthStackScreens = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen component={LoginScreen} name="LoginScreen" />
    </AuthStack.Navigator>
  );
};
export default AuthStackScreens;
