import React, { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OtpConfirmScreen from "../src/screens/otp/OtpConfirm";

const OtpConfirmStack = createNativeStackNavigator();

const OtpConfirmStackScreens: FC<{}> = () => {
  return (
    <OtpConfirmStack.Navigator screenOptions={{ headerShown: false }}>
      <OtpConfirmStack.Screen component={OtpConfirmScreen } name=" OtpConfirmScreen" />
    </OtpConfirmStack.Navigator>
  );
};
export default OtpConfirmStackScreens;
