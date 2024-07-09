import React from "react";
import {
   View,
   StyleSheet,
   Image,
   Text,
   TouchableOpacity,
   Platform,
} from "react-native";
import { Splash } from "../../../assets";

const OS = Platform.OS;

const SplashScreen = ({ navigation }) => {
   const handlePress = () => {
      navigation.navigate("OtpSenderStack", {
         screen: "OtpSenderScreen",
      });
   };

   return (
      <View style={{ backgroundColor: "red" }}>
         <Image source={Splash} style={styles.backgroundImage} />
      </View>
   );
};

const styles = StyleSheet.create({
   slide: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
   },
   backgroundImage: {
      ...StyleSheet.absoluteFillObject,
      width: "100%",
      height: "100%",
   },
});

export default SplashScreen;
