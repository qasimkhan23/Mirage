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
      marginTop:30,
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

   starImage: {
   width:45,
   height:45,
  },
  ticket:{
   width:400,
   height:250,
  },
   rectangle: {
    flexDirection: 'row',
    width:'100%',
    marginTop: 10, 
   },
  rectOne: {
    width: 50, // Set appropriate width
    height: 50, // Set appropriate height
    // Add other styles as needed
  },
  rectTwo: {
    width: 50, // Set appropriate width
    height: 50, // Add other styles as needed
    marginLeft: 10, // Add spacing between rectangles if needed
  },
});
export default styles;