import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { Track1, Background } from "./assets";
import { useFonts } from "expo-font";
import ChartsScreen from "./src/screens/Charts/Charts";
import EventScreen from "./src/screens/Ecents/Event";
<<<<<<< HEAD
import ShopScreen from "./src/screens/Shop/shop";
import GalleryScreen from "./src/screens/Gallery/gallery";
=======
import RootNavigator from "./navigation/RootNavigator";

>>>>>>> 8f6e5e8db9835bdb5112a28823d04841bfb823b2
export default function App() {
   const [fontsLoaded] = useFonts({
      regular: require("./assets/fonts/BebasNeue-Regular.ttf"),
   });
   if (!fontsLoaded) {
      return;
   }

   return (
      <View style={styles.container}>
         <RootNavigator />
         <StatusBar style="auto" />
<<<<<<< HEAD
         <Image source={Track1} /> */}
=======
>>>>>>> 8f6e5e8db9835bdb5112a28823d04841bfb823b2
         {/* <ChartsScreen /> */}
         {/* <EventScreen/> */}
         <ShopScreen/>
         {/* <GalleryScreen/> */}
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#fff",
      // alignItems: "center",
      // justifyContent: "center",
   },
});
