import { StyleSheet } from "react-native";
import { BackBtn } from "../../../assets";

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: "flex-start",
      alignItems: "center",
      width: "100%",
      height: "100%",
      resizeMode: "contain",
   },
   bigContainer: {
      display: "flex",
      flex: 1,
      // alignItems: 'center',
      marginHorizontal: 5,
      fontFamily: "regular",
      marginBottom: 100,
      // height:'100%'
   },
   verticalScrollView: {
      // width: '100%',
      display: "flex",
      flex: 1,
      paddingHorizontal: 10,
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
      flex: 0.86,
      textAlign: "center",
      justifyContent: "center",
      marginTop: 12,
   },
   topText: {
      color: "#fff",
      fontSize: 30,
      fontFamily: "regular",
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
      marginLeft: -5,
   },

   text: {
      color: "#fff",
      fontSize: "18",
      fontFamily: "regular",
   },

   cardsH:{
    marginTop:20,
    paddingBottom:10,
    justifyContent:'center',
    alignItems:'center',
},
   cardT: {
      color: '#fff',
      fontSize: 18,
      fontFamily: 'regular',
      borderBottomWidth:2,
      borderBottomColor:'rgba(255, 255, 255, 0.5)',
   },

   popsec: {
      // justifyContent: "center",
      // alignItems: "center",
      // paddingVertical: 10,
   },
   popCont: {
      justifyContent: "center",
      alignItems: "center",
      width: 390,
      height: 200,
      marginHorizontal:-10,
   },
   popimg: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
   },
   Rainimg:{
      width: 180,
      height: 140,
      top:0,
      left:40,
      position:'absolute',
      resizeMode: 'cover',
   },
    daysLeft: {
      display: "flex",
      // flex:1,
      // flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      borderWidth: 0.2,
      borderRadius:5,
      borderColor: "white",
      backgroundColor: "#9319e7",
      width:70,
      height:40,
      position:'absolute',
      bottom:20,
      left:80,
      
      // paddingHorizontal: 10,
      // paddingVertical: 20,
      // marginLeft: 10,
      // marginBottom:20
   },
    daysT: {
      color: "#fff",
      fontSize: 12,
      fontFamily: "regular",
   },

   packBg:{
      flexDirection: "row",
      justifyContent:'center',
      alignItems: 'center',
      marginLeft:50,
      
      width:300,
      height:43,
      resizeMode:'contain',
   },
   packPic: {
      flexDirection: "row",
      alignItems: "center",
      
      justifyContent: "center",
   },
   eventD: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      marginHorizontal:10,
      
   },
   event: {
      color: "#fff",
      fontSize: 12,
      fontFamily: "regular",
      marginBottom:-5,
   },
   mon: {
      color: "#fff",
      fontSize: 28,
      fontFamily: "regular",
      // textAlign:'center',
   },

   eventN: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      marginHorizontal:10,
   },
 eventN: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
   },
   eventName: {
      color: "#fff",
      fontSize: 28,
      fontFamily: "regular",
      marginLeft:5,
   },
   forty: {
      color: "#9319e7",
      fontSize: 28,
      fontFamily: "regular",
      marginLeft:5,
      marginRight:-15,
   },
   
   popMid:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      width:'70%',
      position:'absolute',
      top:'84%',
      left:'20%',
      // width:'95%',
      // paddingLeft:18,
   },
    
   // deal1:{
   //    color: '#fff',
   //    fontSize: 8,
   //    fontFamily: 'regular',
   // },
   // deal2:{
   //    color: '#fff',
   //    fontSize: 8,
   //    fontFamily: 'regular',
   //    // paddingLeft:25,
   // },
   // deal3:{
   //    color: '#fff',
   //    fontSize: 8,
   //    fontFamily: 'regular',
   //    marginRight:-5,
   // },

   deal1: {
      color: "#fff",
      fontSize: 8,
      fontFamily: "regular",
   },
   deal2: {
      color: "#fff",
      fontSize: 8,
      fontFamily: "regular",
   },
   deal3: {
      color: "#fff",
      fontSize: 8,
      fontFamily: "regular",
   },

   cardAndPack: {
      justifyContent: "center",
      alignItems: "center",
      marginTop: 15,
   },
   cardAndPackH: {
      color: "#fff",
      fontSize: 22,
      fontFamily: "regular",
   },

   cardAndPackPics: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center",
      // paddingHorizontal:-20,
   },

   cardAndPackCont: {
      borderWidth: 0.2, // Adjust the thickness as needed
      borderRadius: 4, // Adjust the radius as needed
      borderColor: "white", // White border color
      backgroundColor: "rgba(169, 169, 169,0.1)",
      marginTop: 30,
      marginVertical:10,
   },
   cardContainer: {
      alignItems: "center",
      marginBottom: 10,
   },
   cardAndPackImageR: {
      height: 100,
      width: 130,
      top: -30,
      // marginBottom:10,
      marginVertical:10,
   },
   cardAndPackImageL: {
      height: 100,
      width: 80,
      top: -30,
      marginVertical:10,
   },

   cardAndPackText: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
   },
   TextL: {
      color: "#fff",
      fontSize: 12,
      fontFamily: "regular",
      marginTop: -35,
     marginVertical:5,
   },
   TextR: {
      color: "#fff",
      fontSize: 12,
      fontFamily: "regular",
      marginTop: -35,
     marginVertical:5,
   },
   priceAndlogo: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom:5,
   },
   leftPrice: {
      height:10,
      width: 10,
      resizeMode:'contain',
      marginHorizontal:5,
   },
   leftPrice1: {
      height: 30,
      width: 30,
      // marginTop: -30,
   },
   rightPrice: {
      height: 30,
      width: 40,
   },
   rightPrice1: {
      height: 30,
      width: 40,
      marginTop: -30,
   },

   buyBox: {
      width: 120,
      height: 25,
      borderWidth: 0.2,
      borderRadius: 2,
      borderColor: "white",
      backgroundColor: "rgba(169, 169, 169,0.1)",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
   },
   buyText: {
      color: "#fff",
      fontSize: 10,
      // fontFamily: "Arial",
   },

   buyBoxRight: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
   },
   buyBoxM: {
      width: 30,
      height: 25,
      borderWidth: 0.2,
      borderRadius: 2,
      borderColor: "white",
      backgroundColor: "rgba(169, 169, 169,0.1)",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
   },
   buyTextM: {
      color: "#fff",
      fontSize: 16,
      // fontFamily: "Arial",
   },
   buyBoxR: {
      width: 70,
      height: 25,
      borderWidth: 0.2,
      borderRadius: 2,
      borderColor: "white",
      backgroundColor: "rgba(169, 169, 169,0.1)",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      marginRight: 5,
      marginLeft: 5,
   },
   buyTextR: {
      color: "#fff",
      fontSize: 10,
      // fontFamily: "Arial",
   },

   buyBoxP: {
      width: 30,
      height: 25,
      borderWidth: 0.2,
      borderRadius: 2,
      borderColor: "white",
      backgroundColor: "rgba(169, 169, 169,0.1)",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
   },
   buyTextP: {
      color: "#fff",
      fontSize: 14,
      // fontFamily: "Arial",
   },

   subsec: {
      justifyContent: "center",
      alignItems: "center",
      paddingVertical: -10,
   },
   subCont: {
      width: "100%",
      height: 80,
      justifyContent: "center",
      alignItems: "center",
   },
   Subimg: {
      width: "100%",
      height: "100%",
      resizeMode: "contain",
   },

   subMid: {
      // position:'absolute',
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      width: "70%",
      // marginTop:-100,
   },
   subDeal1: {
      color: "#fff",
      fontSize: 14,
      fontFamily: "regular",
      marginTop: -15,
   },
   subDeal2: {
      color: "#fff",
      fontSize: 14,
      fontFamily: "regular",
      marginRight: -40,
   },

   PassPics: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center",
      width: "100%",
      paddingHorizontal: -35,
   },
   passTextContainer: {
      alignItems: "center",
      marginBottom: 10,
      flexDirection: "row",
   },
   passPicR: {
      height: 80,
      width: 90,
      marginLeft: 15,
   },
   passPicL: {
      height: 80,
      width: 90,
   },

   cardAndPackText: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
   },
   PassTextLeft: {
      color: "#fff",
      fontSize: 12,
      fontFamily: "regular",
   },
   PassTextRight: {
      color: "#fff",
      fontSize: 12,
      fontFamily: "regular",
   },
   leftPassPrice1: {
      height: 25,
      width: 40,
      marginLeft: -5,
   },
   rightPassPrice: {
      height: 25,
      width: 70,
      marginLeft: -10,
   },
});
export default styles;
