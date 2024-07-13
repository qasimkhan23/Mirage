import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { Track1, Background } from "./assets";
import { useFonts } from "expo-font";
import ChartsScreen from "./src/screens/Charts/Charts";
import EventScreen from "./src/screens/Ecents/Event";
import ShopScreen from "./src/screens/Shop/shop";
import GalleryScreen from "./src/screens/Gallery/gallery";
import RootNavigator from "./navigation/RootNavigator";

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
