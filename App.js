import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { Track1, Background } from "./assets";
import { useFonts } from "expo-font";
import RootNavigator from "./navigation/RootNavigator";
import * as SplashScreen from "expo-splash-screen";
import { LogBox } from "react-native";
import { useCallback } from "react";

SplashScreen.preventAutoHideAsync();

LogBox.ignoreLogs([
   "Non-serializable values were found in the navigation state",
   "ViewPropTypes will be removed from React Native",
   "Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`",
   "Animated.event now requires a second argument for options",
]);

export default function App() {
   const [fontsLoaded] = useFonts({
      regular: require("./assets/fonts/BebasNeue-Regular.ttf"),
   });

   const onLayoutRootView = useCallback(async () => {
      if (fontsLoaded) {
         await SplashScreen.hideAsync();
      }
   }, [fontsLoaded]);

   if (!fontsLoaded) {
      return;
   }

   return (
      <View style={styles.container} onLayout={onLayoutRootView}>
         <RootNavigator />
         <StatusBar style="auto" />
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
