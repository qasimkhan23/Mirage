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
      marginBottom: 100,
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
      justifyContent: 'space-evenly', 
      alignItems: 'center',
      width: '100%',
      marginTop: 20,
      marginLeft:5,
      paddingHorizontal:25,
   },
   picContainer: {
      position: 'relative',
   },
   picFrameContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 70,
      height: 70,
      borderWidth: 2, 
      borderRadius: 50, 
      borderColor: 'white',
   },

   profilePic: {
      width: '100%',
      height:'100%',
      borderRadius: 50,
    //   position: 'absolute',
   },
   logoTextContainer: {
      position: 'absolute',
      bottom: -15,
      right: -6,
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
   },
   
   levT:{
    flexDirection: 'column',
   //  justifyContent: 'flex-end',
    // textAlign:'right',
   },
   picTexxt: {
      color: '#fff',
      fontSize: 12,
      fontFamily: 'regular',
       justifyContent: 'flex-end',

      // marginBottom:2,
      // marginRight:2,
   },
      progBarSec: {
      // width: '100%',
      flexDirection:'row',
      // justifyContent:'flex-start',
      alignItems:'center',
      
   },
   progBarContainer: {
      marginTop: -15,
      // justifyContent:'center',
      // alignItems:'center',
      flex:0,
      
      // position:'relative',
   },

   levT:{
      display:'flex',
      flexDirection:'row-reverse',
      marginRight:5,
   },
   barImage:{
      display:'flex',
      width:200,
      zIndex:-10,
   },
   tProg: {
      width: '100%',
      height: 10,
      resizeMode:'contain',
      // borderRadius: 4,
   },

levelConta:{
    justifyContent:'center',
    alignItems:'center',
    borderWidth: 2, 
    borderRadius: 50, 
    borderColor: 'white',
    width:35,
    height:35,
    marginTop:-2,
   },

level: {
      color: '#fff',
      fontSize: 25,
      fontFamily: 'regular',
      
      borderRadius: 50, 
      borderColor: 'white',
   },

    gBox: {
      width:45,
      height:40,
      justifyContent:'center',
      alignItems:'center',
    // marginTop:5,
    marginLeft:5,
    marginRight:10,
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
      marginBottom:20,
 
   },
   dimond:{
    width: '100%',
    height: '100%',
    resizeMode:'contain',
   },


   ticketSec:{
      //    width: '100%',
      // alignItems: 'center',
      // marginVertical: 20,
      // position: 'relative',
},

ticket:{
   width:'100%',
   height:100,
   marginTop:10,
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
});

export default styles;
