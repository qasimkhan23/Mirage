import React, { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import VirtualVisiteScreen from "../src/screens/virtualVisite/virtualVisite";

const VirtualVisiteStack = createNativeStackNavigator();

const VirtualVisiteStackScreens = () => {
  return (
    <VirtualVisiteStack.Navigator screenOptions={{ headerShown: false }}>
      <VirtualVisiteStack.Screen component={VirtualVisiteScreen } name="VirtualVisiteScreen" />
    </VirtualVisiteStack.Navigator>
  );
};
export default VirtualVisiteStackScreens;
