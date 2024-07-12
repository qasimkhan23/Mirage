import React, { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../src/screens/Splash/Splash";

const SplashStack = createNativeStackNavigator();

const SplashStackScreens = () => {
   return (
      <SplashStack.Navigator screenOptions={{ headerShown: false }}>
         <SplashStack.Screen component={SplashScreen} name="SplashScreen" />
      </SplashStack.Navigator>
   );
};
export default SplashStackScreens;
