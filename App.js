import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { Track1, Background } from "./assets";
import { useFonts } from "expo-font";
import ChartsScreen from "./src/screens/Charts/Charts";
import EventScreen from "./src/screens/Ecents/Event";
import ShopScreen from "./src/screens/Shop/shop";
import GalleryScreen from "./src/screens/Gallery/gallery";
export default function App() {
   const [fontsLoaded] = useFonts({
      regular: require("./assets/fonts/BebasNeue-Regular.ttf"),
   });
   if (!fontsLoaded) {
      return;
   }

   return (
      <View style={styles.container}>
         {/* <Text style={{ fontFamily: "regular", fontSize: 30 }}>
            Open up App.js to start working on your app!
         </Text>
         <StatusBar style="auto" />
         <Image source={Track1} /> */}
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
      alignItems: "center",
      justifyContent: "center",
      
   },
});
