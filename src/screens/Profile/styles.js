import { StyleSheet } from "react-native";
import { BackBtn } from "../../../assets";
import { setStatusBarBackgroundColor } from "expo-status-bar";

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: "flex-start",
      alignItems: "center",
      width: "100%",
      height: "100%",
      resizeMode: "cover",
   },
   bigContainer: {
      display: "flex",
      flex: 1,
      // alignItems: 'center',
      // marginHorizontal: 5,
      fontFamily: "regular",
      // height:'100%'
   },
   verticalScrollView: {
      // width: '100%',
      display: "flex",
      flex: 1,
      paddingHorizontal: 15,
   },

   topConta: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      paddingHorizontal: 20,
      marginTop: 35,
   },

   logoCont: {
      flexDirection: "row",
      alignItems: "center",
   },

   logo: {
      width: 20,
      height: 20,
      marginRight: 12,
   },

   logoText: {
      color: "#fff",
      fontSize: 12.1,
      fontFamily: "regular",
   },
   pagelogo: {
      flexDirection: "row",
      alignItems: "center",
      width: "100%",
      justifyContent: "space-between",
   },
   pageTop: {
      flex: 0.615,
      textAlign: "center",
      justifyContent: "center",
      marginTop: 12,
   },
   topText: {
      color: "#fff",
      fontSize: 30,
      fontFamily: "regular",
      marginBottom: 20,
   },
   backBtn: {
      // display:'flex',
      // flex:1,
      justifyContent: "flex-start",
   },
   Btn: {
      width: 35,
      height: 20,
      resizeMode: "contain",
      marginTop: 20,
      marginLeft: -5,
   },

   text: {
      color: "#fff",
      fontSize: "18",
      fontFamily: "regular",
   },

   profileContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
   },
   picContainer: {
      position: "relative",
   },
   picFrameContainer: {
      justifyContent: "center",
      alignItems: "center",
      width: 90,
      height: 90,
      borderWidth: 2,
      borderRadius: 50,
      borderColor: "white",
   },
   //    picFrame: {
   //       width: 85,
   //       height:85,
   //       borderRadius: 50,
   //    },
   profilePic: {
      width: "100%",
      height: "100%",
      borderRadius: 50,
      //   position: 'absolute',
   },

   totaCards: {
      flexDirection: "column",
      justifyContent: "Center",
      alignItems: "center",
      width: "100%",
      marginTop: 15,
      paddingVertical: 5,
   },
   textRow1: {
      flexDirection: "row",
      width: 300,
   },
   textRow2: {
      flexDirection: "row",
      width: 300,
   },

   bold: {
      color: "#fff",
      fontSize: 12,
      fontFamily: "regular",
      marginTop: -2,
   },
   simpleT: {
      color: "#fff",
      fontSize: 10,
      fontFamily: "regular",
   },

   profileBottomSec: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      // width: 300,
      marginTop: 15,
      flex: 1,
   },

   levelSec: {
      flexDirection: "row",
      // flex: 0.6,
      marginLeft: 10,
   },
   levelText: {
      color: "#fff",
      fontSize: 20,
      fontFamily: "regular",
      marginRight: 5,
   },

   levelCircle: {
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 2,
      borderRadius: 50,
      borderColor: "white",
      width: 30,
      height: 30,
      marginTop: -2,
   },

   level: {
      color: "#fff",
      fontSize: 20,
      fontFamily: "regular",
      borderColor: "white",
   },
   levelSecR: {
      flexDirection: "row",
      // justifyContent: "Center",
      // alignItems: "center",
      flex: 1,
      marginRight: 10,
      // width: 190,
      //   marginTop:15,
      marginLeft: 16,
   },

   levelMid: {
      flexDirection: "column",
      justifyContent: "Center",
      alignItems: "center",
      //   marginTop:15,
   },

   midText1: {
      color: "#fff",
      fontSize: 10,
      fontFamily: "regular",
      borderColor: "white",
      textAlign: "center",
   },
   midText2: {
      color: "#fff",
      fontSize: 8,
      fontFamily: "regular",
   },

   voiceLogo: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 0.4,
      borderRadius: 4,
      borderColor: "white",
      backgroundColor: "rgba(169, 169, 169,0.1)",
      paddingHorizontal: 5,
      paddingVertical: 1,
      marginLeft: 10,
   },

   logoBtn: {
      resizeMode: "contain",
      width: 15,
      height: 15,
      marginRight: 3,
   },
   logoT: {
      color: "#fff",
      fontSize: 10,
      fontFamily: "regular",
   },

   topTrack: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "95%",
      paddingHorizontal: 10,
      marginTop: 15,
   },
   leftText: {
      flexDirection: "row",
      alignItems: "center",
      fontFamily: "regular",
   },
   topIcon: {
      width: 25,
      height: 25,
      marginBottom: 8,
      marginRight: 3,
      resizeMode: "contain",
   },
   top50: {
      color: "#fff",
      fontSize: 22,
      fontFamily: "regular",
   },

   trackSec: {
      marginTop: 5,
   },

   image1: {
      width: 150,
      height: 150,
      marginRight: 8,
   },
   textTrack: {
      display: "flex",
      flexDirection: "column",
      marginLeft: 10,
   },
   title: {
      color: "#fff",
      fontSize: 12,
   },
   singerName: {
      color: "#fff",
      fontSize: 8,
   },
   viewss: {
      color: "#fff",
      fontSize: 8,
   },
});
export default styles;
