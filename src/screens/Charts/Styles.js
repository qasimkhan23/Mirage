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
      // paddingTop: 35,
      // paddingLeft: 10,
      // paddingRight: 10,
   },
   topCont: {
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
   backBtn:{
      position: 'absolute',
      top:70,
      left:0,
   },
   Btn: {
      width: 20,
      height: 24,
   },

   text:{
      color:'#fff',
      fontSize:'18',
      fontFamily:'regular',
   },


   topTrack: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '95%',
      paddingHorizontal: 20,
      marginTop: 70,
   },
   leftText:{
      flexDirection:'row',
      alignItems:'center',
      fontFamily:'regular',
   },
   topIcon:{
      width:25,
      height:25,
      marginBottom: 8,
      marginRight: 3,
      resizeMode: 'contain',
   },
   top50:{
      color:'#fff',
      fontSize: 22,
      fontFamily:'regular',
   },
   rightText: {
      flexDirection:'row',
      alignItems:'center',
      
   },
   rectangle:{
      width: 55,
      height: 20,
      justifyContent:'center',
      alignItems:'center',
   },
   rectText:{
      position:'absolute',
      color:'#fff',
      fontSize:10,
      textAlign:'center',
      width: '100%',
   },

   trackSec: {
      // flexDirection:'row',
      // width: '100%',
      
      paddingHorizontal: 20,
      marginTop: 10,
      marginLeft:12,
   },
   // firstTrack:{
   //    flexDirection:'column',
   //    alignItems:'flex-start',
      
   // },

   image1:{
      width:150,
      height:150,
      // marginRight:10,
   },
   textTrack:{
      display:'flex',
      flexDirection:'column',
      marginLeft:10,
   },
   title:{
      color:'#fff',
      fontSize:12,
   },
   singerName:{
      color:'#fff',
      fontSize:8, 
   },
   by:{
      color:'#fff',
      fontSize:8, 
   },
   changeColor:{
      color:'#A586FB',
      fontSize:8, 
   },
   image2:{
      width:150,
      height:150,
      marginRight:10,
   },
   image3:{
      width:150,
      height:150,
      marginRight:10,
   },
artistSec: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems:'center',
      width: '95%',
      paddingHorizontal: 20,
      marginTop: 10,
},
logos:{
      flexDirection:'row',
      fontFamily:'regular',
      alignItems:'center',
},
trendImg:{
      width:22,
      height:22,
      marginBottom: 2,
      marginRight: 6,
      resizeMode: 'contain',
},
trendText:{
      color:'#fff',
      fontSize: 22,
      fontFamily:'regular',
},


trendSec:{
   flexDirection:'row',
   width:'100%',
   
},

sieImg:{     
      width:95,
      height:95,
      marginTop: 20,
      marginRight:10,
      marginLeft: 25,
   },
bigImg:{
      width:95,
      height:95,
      marginTop: 20,
      marginLeft: 10,
},
harryImg:{
      width:95,
      height:95,
      marginTop: 20,
      marginLeft: 18,
},
sieImg2:{
      width:95,
      height:95,
      marginTop: 20,
      marginLeft: 20,
},
name:{
      color:'#fff',
      fontSize: 12,
      fontFamily:'regular',
      textAlign:'center',
      marginTop:8,
},

awardSec: {
   flexDirection: 'row',
   justifyContent: 'space-between',
   paddingHorizontal: 20,
   marginTop: 20,
   width: '100%',
},
logos: {
   flexDirection: 'row',
   alignItems: 'center',
},
awardImg: {
   width: 25,
   height: 25,
   marginRight: 10,
   resizeMode: 'contain',
},
makeCol: {
   flexDirection: 'column',
   justifyContent: 'center',
},
daypng: {
   width:45,
   height: 7,
   resizeMode: 'contain',
},
trendText: {
   color: '#fff',
   fontSize: 22,
   fontFamily: 'regular',
},
voteText: {
   flexDirection: 'row',
   alignItems: 'center',
},
rectanglee: {
   width: 80,
   height: 50,
   marginHorizontal: 25,
   resizeMode: 'contain',
},
logomusic: {
   position:'absolute',
   width: 19,
   height: 15,
   marginHorizontal: 28,
   resizeMode: 'contain',
},
rectaText: {
   position: 'absolute',
   color: '#fff',
   fontSize: 13,
   textAlign: 'center',
   width: '55%',
   left: 38,
   fontFamily: 'regular',
},

awardImages:{
      flexDirection:'row',
      width: '100%',
      paddingHorizontal: 20,
      marginTop: 10,
      marginLeft:12,
},
awardImages1:{
      width:150,
      height:150,
      marginRight:10,
},
awardImages2:{
      width:150,
      height:150,
      marginRight:10,
},

awardImages3:{
      width:150,
      height:150,
      marginRight:10,
},

});
export default styles;
