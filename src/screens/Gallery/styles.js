import { StyleSheet } from "react-native";
import { Ticket } from "../../../assets";
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
      marginBottom: 100,
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
      flex:0.77,
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
      
      justifyContent:'flex-start',
   },
   Btn:{
      width:48,
      height:20,
      resizeMode:'contain',     
      marginLeft:-15,
      
   },
  

   text:{
      color:'#fff',
      fontSize:'18',
      fontFamily:'regular',
   },
   // expT:{
   //    color:'#fff',
   //    fontSize:'18',
   //    fontFamily:'regular',
   // },

   //  container: {
   //    flex: 1,
   //    justifyContent: 'flex-start',
   //    alignItems: 'center',
   //    width: '100%',
   //    height: '100%',
   //    resizeMode: 'cover',
   // },
   //    bigContainer: {
   //    flex: 1,
   //    alignItems: 'center',
   //    marginHorizontal:15,
   //    fontFamily:'regular',
   //    marginBottom: 100,
   // },
   // verticalScrollView: {
   //    width: '100%',
   // },

   // topCont: {
   //    flexDirection: 'row',
   //    justifyContent: 'space-between',
   //    alignItems: 'center',
   //    width: '100%',
   //    paddingHorizontal: 20,
   //    marginTop:35,
   // },

   // logoCont: {
   //    flexDirection: 'row',
   //    alignItems: 'center',
   // },

   // logo: {
   //    width: 20,  
   //    height: 20, 
   //    marginRight: 12,
   // },
   //    pagelogo:{
   //    flexDirection:'row',
   //    alignItems:'center',
   //    width:'100%',
   //    justifyContent:'space-between',
        
   // },
   // pageTop:{
   //    flex:0.72,
   //    textAlign:'center',
   //    justifyContent:'center',
   //    marginTop:12,
     
      
   // },
   // topText:{
   //    color: '#fff',
   //    fontSize:30,
   //    fontFamily:'regular',
      
   // },
   // logoText:{
   //    color: '#fff',
   //    fontSize:12.1,
   //    fontFamily:'regular',
   // },
   // backBtn:{
   //    position: 'absolute',
   //    top:70,
   //    left:-10,
   // },
   // Btn: {
   //    width: 20,
   //    height: 24,
   // },

   

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

   
   topTrack: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '95%',
      marginTop:30,
      marginBottom:-8,
      
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
      textTransform:'capitalize',
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
      cardSec: {
      flexDirection: 'row',
      justifyContent:'space-between',
      marginLeft:-15,
    //   paddingLeft:20,    
      
     },

     cards:{
      height:240,
      width:150,
      marginTop:-12,
      marginHorizontal:-10,
      marginLeft:-25,
      marginBottom:-30,
     },
     LCard:{
      width:'100%',
      height:'100%',
      resizeMode:'contain',
      // marginHorizontal:-80,
      // left:-20
          //   marginVertical:2,
   },

   expcar:{
      flexDirection:'column',
      justifyContent:'flex-start',
      marginTop:30,
   },


   expT:{   
      color:'#fff',
      fontSize:18,
      fontFamily:'regular',
   },
legendbox:{
      width: 55,
      height: 18,
      justifyContent:'center',
      alignItems:'center',
      textAlign:'center',
      color:'#fff',
   fontSize:8,
   borderWidth: 0.2, 
   borderRadius: 2, 
   borderColor: 'white',
   backgroundColor: 'rgba(169, 169, 169,0.1)',
   // paddingHorizontal:5,
   // paddingVertical:2,
   // // marginLeft:2,
   // marginRight:2,
   marginTop:5,
   },
   legendText:{   
      color:'#fff',
      fontSize:12,
      textAlign:'center',
      fontFamily:'regular',
   },
trackHor:{
   marginLeft:-20,
},

   smallCards: {
      flexDirection: 'row',
      // flexWrap:'wrap',
      justifyContent:'space-between',
      marginTop:3,
      
     },
     cardpic:{
      width:60,
      height:130,
      resizeMode:'contain',
      marginHorizontal:4,
      marginVertical:2,
   },

});
export default styles;