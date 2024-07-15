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
      justifyContent:'center',
      alignItems:'center',
      width:'100%',
      // marginRight:40,
   },
   popimg: {
      width: 370,
      height: 190,
      resizeMode: 'contain',
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
    
   deal1:{
      color: '#fff',
      fontSize: 8,
      fontFamily: 'regular',
   },
   deal2:{
      color: '#fff',
      fontSize: 8,
      fontFamily: 'regular',
      // paddingLeft:25,
   },
   deal3:{
      color: '#fff',
      fontSize: 8,
      fontFamily: 'regular',
      marginRight:-5,
   },

      cardAndPack:{
      justifyContent:'center',
      alignItems:'center',
      marginTop:15,
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
      marginBottom:10,
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

   buyBox:{
      width:120,
      height:25,
    borderWidth: 0.2,
    borderRadius: 2, 
    borderColor: 'white', 
    backgroundColor: 'rgba(169, 169, 169,0.1)', 
    textAlign:'center',
    alignItems:'center',
    justifyContent:'center',
   },
   buyText:{
      color: '#fff',
      fontSize:10,
      fontFamily: 'Arial',
   },

   buyBoxRight:{
      display:'flex',
      flexDirection:'row',
      alignItems:'center',
    justifyContent:'center',
   },
   buyBoxM:{
      width:30,
      height:25,
    borderWidth: 0.2,
    borderRadius: 2, 
    borderColor: 'white', 
    backgroundColor: 'rgba(169, 169, 169,0.1)', 
    textAlign:'center',
    alignItems:'center',
    justifyContent:'center',
    
   },
   buyTextM:{
      color: '#fff',
      fontSize:16,
      fontFamily: 'Arial',
   },
   buyBoxR:{
      width:70,
      height:25,
    borderWidth: 0.2,
    borderRadius: 2, 
    borderColor: 'white', 
    backgroundColor: 'rgba(169, 169, 169,0.1)', 
    textAlign:'center',
    alignItems:'center',
    justifyContent:'center',
    marginRight:5,
    marginLeft:5,
    
   },
   buyTextR:{
      color: '#fff',
      fontSize:10,
      fontFamily: 'Arial',
   },

   buyBoxP:{
      width:30,
      height:25,
    borderWidth: 0.2,
    borderRadius: 2, 
    borderColor: 'white', 
    backgroundColor: 'rgba(169, 169, 169,0.1)', 
    textAlign:'center',
    alignItems:'center',
    justifyContent:'center',
   },
   buyTextP:{
      color: '#fff',
      fontSize:14,
      fontFamily: 'Arial',
   },


   subsec: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: -10,
   },
      subCont:{
      width:'100%',
      height:80,
      justifyContent:'center',
      alignItems:'center',
   },
   Subimg: {
      width: '100%',
      height:'100%',
      resizeMode: 'contain',
   },

   subMid: {
      // position:'absolute',
      flexDirection:'row',
      justifyContent:'space-around',
      alignItems:'center',
      width:'70%',
      // marginTop:-100,
      
   },
   subDeal1:{
      color: '#fff',
      fontSize:14,
      fontFamily: 'regular',
      marginTop:-15,
   },
   subDeal2:{
      color: '#fff',
      fontSize:14,
      fontFamily: 'regular',
      marginRight:-40,
   },

   PassPics:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-evenly',
      alignItems:'center',
      width:'100%',
      paddingHorizontal:-35,
   },
   passTextContainer:{
      alignItems:'center',
      marginBottom:10,
      flexDirection:'row',
   },
   passPicR:{
      height:80,
      width:90,
      marginLeft:15,
   },
      passPicL:{
      height:80,
      width:90,
   },


   cardAndPackText:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-evenly',     
   },
   PassTextLeft:{
      color: '#fff',
      fontSize: 12,
      fontFamily: 'regular',
      
   },
   PassTextRight:{
      color: '#fff',
      fontSize: 12,
      fontFamily: 'regular',
   },
   leftPassPrice1:{
      height:25,
      width:40,
      marginLeft:-5,
   },
   rightPassPrice:{
      height:25,
      width:70,
      marginLeft:-10,
   },
});
export default styles;
