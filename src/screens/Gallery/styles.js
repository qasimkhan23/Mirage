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
      flex: 1,
      alignItems: 'center',
      marginHorizontal:15,
      fontFamily:'regular',
   },
   verticalScrollView: {
      width: '100%',
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
      left:-10,
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

cardsH:{
    marginTop:65,
    paddingBottom:10,
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
      marginTop:10,
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
      cards: {
      flexDirection: 'row',
      justifyContent:'space-between',
    //   paddingLeft:20,    
    //   marginTop:2,
      
     },
     LCard:{
      width:300,
      height:300,
      resizeMode:'contain',
      marginHorizontal:-80,
      left:-20
          //   marginVertical:2,
   },




});
export default styles;