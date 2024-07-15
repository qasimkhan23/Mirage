import { StyleSheet } from "react-native";
import { BackBtn } from "../../../assets";

const styles = StyleSheet.create({
container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
   },
      bigContainer: {
         display:'flex',
      flex: 1,
      // alignItems: 'center',
      marginHorizontal:5,
      fontFamily:'regular',
      // height:'100%'
   },
   verticalScrollView: {
      // width: '100%',
      display:'flex',
      flex:1,
      paddingHorizontal:10,
   },

      topConta: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      paddingHorizontal: 20,
      marginTop:35,
   },

   logoCont: {
      flexDirection: 'row',
      alignItems: 'center',
   },

   logo: {
      width: 20,  
      height: 20, 
      marginRight: 12,
   },

   logoText:{
      color: '#fff',
      fontSize:12.1,
      fontFamily:'regular',
   },
      pagelogo:{
      flexDirection:'row',
      alignItems:'center',
      width:'100%',
      justifyContent:'space-between',
        
   },
   pageTop:{
      flex:0.7,
      textAlign:'center',
      justifyContent:'center',
      marginTop:12,
     
      
   },
   topText:{
      color: '#fff',
      fontSize:30,
      fontFamily:'regular',
      
   },
   backBtn:{  
      // display:'flex',
      // flex:1,
      justifyContent:'flex-start',
   },
   Btn:{
      width:35,
      height:20,
      resizeMode:'contain',     
      marginLeft:-5,
   },
   // backBtn:{
   //    position: 'absolute',
   //    top:70,
   //    left:0,
   // },
   // Btn: {
   //    width: 20,
   //    height: 24, 
   // },

   text:{
      color:'#fff',
      fontSize:'18',
      fontFamily:'regular',
   },

      popsec: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 10,
   },
   popCont:{
      width:'100%',
      // display:'flex',
      // justifyContent:'center',
      // height:100,
      // width:350,
      // resizeMode:'contain',
   },
   popimg: {
      width: 370,
      height: 190,
      resizeMode: 'contain',
   },
   popMid:{
      flexDirection:'row',
      justifyContent:'space-around',
      alignItems:'center',
      position:'absolute',
      top:'84%',
      width:'95%',
      paddingLeft:30,
   },
    
   deal1:{
      color: '#fff',
      fontSize: 8,
      fontFamily: 'regular',
   },
   deal2:{
      color: '#fff',
      fontSize: 8,
      fontFamily: 'regular',
   },
   deal3:{
      color: '#fff',
      fontSize: 8,
      fontFamily: 'regular',
   },

      cardAndPack:{
      justifyContent:'center',
      alignItems:'center',
      marginTop:10,
   },
   cardAndPackH:{
      color: '#fff',
      fontSize: 22,
      fontFamily: 'regular'     
   },


   cardAndPackPics:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-evenly',
      alignItems:'center',
      // paddingHorizontal:-20,
   },

   cardAndPackCont:{
    borderWidth: 0.2, // Adjust the thickness as needed
    borderRadius: 4, // Adjust the radius as needed
    borderColor: 'white', // White border color
    backgroundColor: 'rgba(169, 169, 169,0.1)', 
    marginTop:30,
   },
   cardContainer:{
      alignItems:'center',
   },
   cardAndPackImageR:{
      height:130,
      width:80,
      top:-30,
   },
      cardAndPackImageL:{
      height:130,
      width:80,
      top:-30,
   },

   cardAndPackText:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-evenly',     
   },
   TextL:{
      color: '#fff',
      fontSize: 12,
      fontFamily: 'regular',
      marginTop:-35,
   },
   TextR:{
      color: '#fff',
      fontSize: 12,
      fontFamily: 'regular',
      marginTop:-35, 
   },
   leftPrice:{
      height:30,
      width:40,
   },
   leftPrice1:{
      height:30,
      width:40,
      marginTop:-30,
   },
   rightPrice:{
      height:30,
      width:40,
   },
   rightPrice1:{
      height:30,
      width:40,
      marginTop:-30,
   },

//    popsec: {
//       justifyContent: 'center',
//       alignItems: 'center',
//       marginTop:-80,
//       zIndex: 10,
//       padding: 10,
//    },
//    popimg: {
//       width: '100%',
//       height: 520,
//       resizeMode: 'contain',
//    },
//    popMid: {
//       position: 'absolute',
//       top: '61%',
//       left: 35,
//       right: -5,
//       flexDirection: 'row',
//       justifyContent: 'space-around',
//       alignItems: 'center',
//    },
//    popMid1: {
//       color: '#fff',
//       fontSize: 8,
//       fontFamily: 'regular',
//       // marginTop:10,
//       // marginLeft:-12,
//    },

//    popMid2: {
//       color: '#fff',
//       fontSize: 8,
//       fontFamily: 'regular',
//       // marginLeft:-12,
//    },

//    popMid3: {
//       color: '#fff',
//       fontSize: 8,
//       fontFamily: 'regular',
//       // paddingHorizontal:-20,
//      right:11,
//      bottom:3,
//    },

//     cardsec: {
//       justifyContent: 'center',
//       alignItems: 'center',
//       marginTop:-190,
//       zIndex: 10,
//       padding: 10,
//    },

// cardimg: {
//       width: '100%',
//       height: 300,
//       resizeMode: 'contain',
//    },
//    cardH:{
//       color: '#fff',
//       fontSize: 18,
//       fontFamily: 'regular',
//       marginTop:25,
//       marginBottom:-50,
//    },
//     middleText1: {
//       flexDirection: 'row',
//       justifyContent: 'space-between',
//       width: '80%',
//    //    paddingHorizontal: 20,
//       marginTop: -147,
//    //    marginBottom:-250,
//    },
//    middleLeft: {
//       color: '#fff',
//       fontSize: 14,
//       fontFamily: 'regular',
//       marginLeft:-12,
//    },
//    middleRight: {
//       color: '#fff',
//       fontSize: 14,
//       fontFamily: 'regular',
//       marginRight:7,
//    },

//    middleText2: {
//       flexDirection: 'row',
//       justifyContent: 'space-between',
//       width: '80%',
//       marginTop:30,
//       marginBottom:30,
//    },
//       middleLeftDown: {
//       color: '#fff',
//       fontSize: 14,
//       fontFamily: 'regular',
//       marginRight:30,
//       marginTop:-2,
//    },
//    middleRightDown: {
//       color: '#fff',
//       fontSize: 14,
//       fontFamily: 'regular',
//       marginTop:-2,
//       marginLeft:45,
//    },

// subsec: {
//       justifyContent: 'center',
//       alignItems: 'center',
//       marginTop:-90,
//       zIndex: 10,
//       padding: 10,
//       marginHorizontal:10,
//    },
// subimg: {
//       width: '100%',
//       height: 260,
//       resizeMode: 'contain',
//    },   

//    subText: {
//       position: 'absolute',
//       bottom: 140,
//       left: 0,
//       right: 0,
//       flexDirection: 'row',
//       justifyContent: 'space-between',
//       paddingHorizontal: 20,
//       width:'70%',
//    },
//    subRight: {
//       color: '#fff',
//       fontSize: 14,
//       fontFamily: 'regular',
//       marginLeft:73,
//    },
//    subLeft: {
//       color: '#fff',
//       fontSize: 14,
//       fontFamily: 'regular',
//       marginLeft:108,
//    },
//    subH: {
//       color: '#fff',
//       fontSize: 18,
//       fontFamily: 'regular',
//       marginTop:74,
//       marginBottom:-80,
//    },
});
export default styles;
