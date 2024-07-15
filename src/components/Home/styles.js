import { StyleSheet } from "react-native";

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

   profileContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between', 
      alignItems: 'center',
      width: '100%',
      marginTop: 20,
 
   },
   picContainer: {
      position: 'relative',
   },
   picFrameContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 90,
      height: 90,
      borderWidth: 2, 
      borderRadius: 50, 
      borderColor: 'white',
   },
//    picFrame: {
//       width: 55,
//       height:55,
//       borderRadius: 50,
//    },
   profilePic: {
      width: '100%',
      height:'100%',
      borderRadius: 50,
   },
   logoTextContainer: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      justifyContent: 'center',
      alignItems: 'center',
   },
   picLogo: {
      width: 30,
      height: 30,
      marginBottom: -6,
      marginRight:4,
   },
   picText: {
      color: '#fff',
      fontSize: 12,
      fontFamily: 'regular',
      marginTop: 1,
      marginBottom:5,
      marginRight:30,
   },
   
   levT:{
    flexDirection: 'row',
    justifyContent: 'flex-end',
    // textAlign:'right',
    width:170,
   },
   picTexxt: {
      color: '#fff',
      fontSize: 12,
      fontFamily: 'regular',
      marginBottom:2,
      marginRight:2,
   },
      progBarSec: {
      width: '100%',
      flexDirection:'row',
      justifyContent:'flex-start',
      alignItems:'center',
      left:-24,
   },
   progBarContainer: {
      marginTop: -15, // Adjust this as needed
      justifyContent:'center',
      alignItems:'center',
      position:'relative',
   },
   tProg: {
      width: 180,
      height: 10,
      borderRadius: 4,
   },
   progBar:{
    width: 110,
    height: 10,
    borderRadius: 4,
    marginTop:-10,
    marginRight:70
    //     position:'absolute',
//     top:'67%',
//     right:'60%',
   },
    levelConta: {
    //   alignItems: 'center',
    //   justifyContent: 'center',
      width:45,
      height:40,
    //   position:'absolute',
    //   top:'68%',
    //   left:'96%',
    //   zIndex:1,
    marginTop:5,
    marginLeft:-2,
   },
   levelFrame: {
      width: '100%',
      height: '100%',
      resizeMode:'contain',
   },
   level: {
      color: '#fff',
      fontSize: 30,
      fontFamily: 'regular',
    position:'absolute',
    marginLeft:16,
    marginTop:2.5,
   },

    gBox: {
      width:45,
      height:40,
      justifyContent:'center',
      alignItems:'center',
    // marginTop:5,
    marginLeft:10,
   },
   boxPic: {
      width: '100%',
      height: '100%',
      resizeMode:'contain',
   },   
   

    celebName:{
      justifyContent:'center',
      alignItems:'center',
      marginTop:-20,
   },
   celebNameH:{
      color: '#fff',
      fontSize: 22,
      fontFamily: 'regular'     
   },

   celebPic:{
      width:'100%',
      height:230,
      justifyContent:'center',
      alignItems:'center', 
        
 
   },
   celebPicAdjustment:{
    width: '100%',
      height: '100%',
      resizeMode:'contain',
   },


    dateContainer:{
      width:'100%',
      height:50,
      justifyContent:'center',
      alignItems:'center',
      marginTop:-15,
   },
   dateBg:{
    width: '100%',
      height: '100%',
      resizeMode:'contain',
   },

   dates:{
      flexDirection:'row',
      justifyContent:'space-around',
      alignItems:'center',
      marginTop:15,
    //   paddingLeft:30,
   },

   dateText:{
      color: '#fff',
      fontSize: 28,
      fontFamily: 'regular'     
   },


   dimondPic:{
      width:'100%',
      height:100,
      justifyContent:'center',
      alignItems:'center', 
        
 
   },
   dimond:{
    width: '100%',
    height: '100%',
    resizeMode:'contain',
   },
});

export default styles;
