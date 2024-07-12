import React, { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OtpSenderScreen from "../src/screens/otp/OtpSender";

const OtpSenderStack = createNativeStackNavigator();

const OtpSenderStackScreens: FC<{}> = () => {
  return (
    <OtpSenderStack.Navigator screenOptions={{ headerShown: false }}>
      <OtpSenderStack.Screen component={OtpSenderScreen } name=" OtpSenderScreen" />
    </OtpSenderStack.Navigator>
  );
};
export default OtpSenderStackScreens;