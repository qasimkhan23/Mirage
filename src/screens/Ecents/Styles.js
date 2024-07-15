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
      flex:0.72,
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

   // logoText:{
   //    color: '#fff',
   //    fontSize:12.1,
   //    fontFamily:'regular',
   // },
   // backBtn:{
   //    position: 'absolute',
   //    top:70,
   //    left:-8,
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

   // ticImage:{
   //    flexDirection:'column',
   //    width:'90%'
   // },
ticketSec:{
      //    width: '100%',
      // alignItems: 'center',
      // marginVertical: 20,
      // position: 'relative',
},

ticket:{
   width:'100%',
   height:100,
   marginTop:5,
   // position:'relative',

},

starImage: {
      position: 'absolute',
      top: 0,
      right: 0,
   width:45,
   height:45,
  },

   ticketBottom: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:-35,
    width:'80%',
    
   //  top:-100,
   //  right:-23, 
   },
  rectOne: {
    width: '90%',
    height: 80, 
    resizeMode: 'contain',
    marginRight: 10,
  },
  rectTwo: {
    width: 70,
    height: 85,  
    resizeMode: 'contain',
  },

   topTrack: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '95%',
      // top:-130,
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
      // marginTop: 10,
      // top:-130,
      // backgroundColor:'red',
      // display:'inline-block'
      // flex:1,
      // display:'flex'

     },
     image1:{
      width:150,
      height:150,
      marginRight:8,
   },
   image2:{
      width:150,
      height:150,
      marginRight:8,
   },
   image3:{
      width:150,
      height:150,
      marginRight:8,
   },

   makeRow: {
   flexDirection: 'row',
},

   image4:{
      width:90,
      height:12,
      marginLeft: 2, 
   },
duaInfo:{

},
   duaText:{
      position:'absolute',
      fontSize:8,
      fontFamily:'regular',
      left:13,
      top:2,
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


   cardTop: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      // marginBottom:-120,
      // top:-115,
   },

   cardlogo:{
      width:25,
      height:25,
      marginBottom: 8,
      marginRight: 5,
      resizeMode: 'contain',
   },

   eventText:{
      color:'#fff',
      fontSize: 25,
      fontFamily:'regular',
      marginRight: 5,
      // marginRight: -8,
   },
   legendRect:{
      width: 50,
      height: 18,
      position:'relative',
      justifyContent:'center',
      alignItems:'center',
      textAlign:'center',
   },
   legendText:{
      position:'absolute',
      color:'#fff',
      fontSize:12,
      textAlign:'center',
      top:2,
      width: '100%',
      fontFamily:'regular',
   },
iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    
},
searchBox: {
    width: 65,
    height: 20,
    resizeMode: 'contain',
      

},
filterlogo: {
    width: 55,
    height: 20,
    
    resizeMode: 'contain',
},

   cards: {
      flexDirection: 'row',
      flexWrap:'wrap',
      justifyContent:'space-between',
      marginTop:2,
      
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