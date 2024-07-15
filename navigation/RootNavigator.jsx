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
import ChartsStackScreens from "./ChartsStack";
import SplashScreen from "../src/screens/Splash/Splash";
import EventScreen from "../src/screens/Events/Event";
import ShopScreen from "../src/screens/Shop/shop";
import RadioScreen from "../src/screens/Radio/Radio";
import HomeScreen from "../src/screens/Home/home";
import GalleryScreen from "../src/screens/Gallery/gallery";
import { View, Text } from "react-native";
import PlayerScreen from "../src/screens/Player/Player";
const RootStack = createNativeStackNavigator();

const AppNavigator = () => {
   return (
      <NavigationContainer>
         <RootStack.Navigator
            initialRouteName={"HomeScreen"}
            screenOptions={{ headerShown: false }}
         >
            <RootStack.Screen
               component={ChartsStackScreens}
               name="ChartsStack"
            />
            <RootStack.Screen component={ShopScreen} name="ShopScreen" />
            <RootStack.Screen component={RadioScreen} name="RadioScreen" />
            <RootStack.Screen component={HomeScreen} name="HomeScreen" />
            <RootStack.Screen component={EventScreen} name="EventScreen" />
            <RootStack.Screen component={GalleryScreen} name="GalleryScreen" />

            <RootStack.Screen component={PlayerScreen} name="PlayerScreen" />
         </RootStack.Navigator>
      </NavigationContainer>
   );
};
export default AppNavigator;
