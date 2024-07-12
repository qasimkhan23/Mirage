import React, { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../src/screens/login/Login";
import AccountScreen from "../src/screens/account/Account";
import MyBookingsScreen from "../src/screens/myBookings/MyBookings";
import BookingsDetailsScreen from "../src/screens/bookingDetails/BookingDetails";
import RechargeAccountScreen from "../src/screens/rechargeAccount/RechargeAccount";
import SettingsScreen from "../src/screens/settings/Settings";
const AccountStack = createNativeStackNavigator();

const AccountStackScreens = () => {
  return (
    <AccountStack.Navigator screenOptions={{ headerShown: false }}>
      <AccountStack.Screen component={AccountScreen} name="AccountScreen" />
      <AccountStack.Screen
        component={MyBookingsScreen}
        name="MyBookingsScreen"
      />
      <AccountStack.Screen
        component={BookingsDetailsScreen}
        name="BookingsDetailsScreen"
      />
      <AccountStack.Screen
        component={RechargeAccountScreen}
        name="RechargeAccountScreen"
      />
      <AccountStack.Screen component={SettingsScreen} name="SettingsScreen" />
    </AccountStack.Navigator>
  );
};
export default AccountStackScreens;
