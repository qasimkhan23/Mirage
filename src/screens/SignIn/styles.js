import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
container: {
      flex: 1,
      justifyContent: 'flex-start',
      // alignItems: 'center',
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
   },
      bigContainer: {
         display:'flex',
      flex: 1,
      // alignItems: 'center',
      paddingHorizontal:50,
      fontFamily:'regular',
      // height:'100%'
      marginBottom: 100,
      justifyContent:'center'
   },
   verticalScrollView: {
      // width: '100%',
      display:'flex',
      flex:1,
      paddingHorizontal:10,
   },
   
   rightText: {
      display: "flex",
      // flex:1,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 0.2,
      borderRadius: 10,
      borderColor: "white",
      backgroundColor: "rgba(169, 169, 169,0.1)",
      // paddingHorizontal: 10,
      paddingVertical: 20,
      // marginLeft: 10,
      marginBottom:20
   },
    rectText: {
      color: "#fff",
      fontSize: 18,
      fontFamily: "regular",
   },
gLogo: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginHorizontal:10,
},
// Logo: {
//     width: '100%',
//     height: '100%',
//     resizeMode: 'contain',
// },

});

export default styles;
