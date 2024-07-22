import React from "react";
import {
   View,
   StyleSheet,
   Image,
   Text,
   TouchableOpacity,
   Platform,
} from "react-native";
import { SplashScreen } from "../../../assets";
import ChartsScreen from "../Charts/Charts";

const OS = Platform.OS;

const Splash = ({ navigation }) => {
   const handlePress = () => {
      navigation.navigate("OtpSenderStack", {
         screen: "OtpSenderScreen",
      });
   };

   console.log("navigatuiobn", navigation);

   return (
      <View style={styles.slide}>
         {/* <Text>sdjfhlsdk</Text> */}
         <Image source={SplashScreen} style={styles.backgroundImage} />
         <ChartsScreen />
      </View>
   );
};

const styles = StyleSheet.create({
   slide: {
      flex: 1,
   },
   backgroundImage: {
      // ...StyleSheet.absoluteFillObject,
      width: "100%",
      height: "100%",
      objectFit: "cover",
   },
});

export default Splash;
