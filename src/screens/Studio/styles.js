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
      paddingHorizontal: 10,
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
      marginTop:12,  
   },
   pageTop:{
    display:'flex',
      flex:2,
      textAlign:'center',
      justifyContent:'center',
   },
   topText:{
      color: '#fff',
      fontSize:30,
      fontFamily:'regular',
      textAlign:'center',
   },
   backBtn:{  
      // display:'flex',
      // flex:1,
      width:'2%',
      justifyContent:'flex-start',
   },
   Btn:{
      width:35,
      height:20,
      resizeMode:'contain',     
      marginLeft:-5,
   },

   text:{
      color:'#fff',
      fontSize:'18',
      fontFamily:'regular',
   },
   aboveRadio:{
    width:370,
    height:100,
   },

   radioContainer:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    width:'100%',
   },

   radioImage:{
    width:370,
    height:500,
    resizeMode:'contain',
   },
});
export default styles;
