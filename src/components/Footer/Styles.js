import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
   container: {
      position: "absolute",
      bottom: 0,
      right: 0,
      left: 0,
      width: "100%",
      height: "12%",
      backgroundColor: "black",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
   },
   backgroundImg: {
      resizeMode: "contain",
      // backgroundColor: "red",
      width: "100%",
      height: "100%",
   },
   homeIcon: {
      width: 40,
      height: 40,
      resizeMode: "contain",
   },
   studioIcon: {
      width: 100,
      height: 40,
      resizeMode: "contain",
   },
   profileIcon: {
      width: 100,
      height: 40,
      resizeMode: "contain",
   },
   radioIcon: {
      width: 100,
      height: 40,
      resizeMode: "contain",
   },
   chartsIcon: {
      width: 100,
      height: 40,
      resizeMode: "contain",
   },
   iconsContainer: {
      display: "flex",

      flex: 1,
   },
});
export default styles;
