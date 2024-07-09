import React, { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProScreen from "../src/screens/pro/Pro";
const ProStack = createNativeStackNavigator();

const ProStackScreens = () => {
  return (
    <ProStack.Navigator screenOptions={{ headerShown: false }}>
      <ProStack.Screen component={ ProScreen} name="ProScreen" />
    </ProStack.Navigator>
  );
};
export default ProStackScreens;