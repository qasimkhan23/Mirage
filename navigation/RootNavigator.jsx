import React, { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashStackScreens from "./SplashStack";
// import AuthStackScreens from "./AuthStack";
// import BottomStackScreens from "./BottomStack";
// import OtpSenderStackScreens from "./OtpSenderStack";
// import OtpConfirmStackScreens from "./OtpConfirmStack";
import { NavigationContainer } from "@react-navigation/native";
// import VirtualVisiteStackScreens from "./VirtualVisiteStack";
// import ProStackScreens from "./ProStack";
import SplashScreen from "../src/screens/Splash/Splash";
import ChartScreen from "../src/screens/Charts/Charts";
import EventScreen from "../src/screens/Ecents/Event";
import ShopScreen from "../src/screens/Shop/shop";
import RadioScreen from "../src/screens/Radio/Radio";
import HomeScreen from "../src/screens/Home/home";
import ProfileScreen from "../src/screens/Profile/profile";
import { View, Text } from "react-native";

const RootStack = createNativeStackNavigator();

const AppNavigator = () => {
   return (
      <NavigationContainer>
         <RootStack.Navigator
            initialRouteName={"HomeScreen"}
            screenOptions={{ headerShown: false }}
         >
            <RootStack.Screen component={ChartScreen} name="ChartScreen" />
            <RootStack.Screen component={ShopScreen} name="ShopScreen" />
            <RootStack.Screen component={RadioScreen} name="RadioScreen" />
            <RootStack.Screen component={HomeScreen} name="HomeScreen" />
            <RootStack.Screen component={EventScreen} name="EventScreen" />
            <RootStack.Screen component={ProfileScreen} name="ProfileScreen" />

         </RootStack.Navigator>
      </NavigationContainer>
   );
};
export default AppNavigator;
