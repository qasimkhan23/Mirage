import React, { useEffect, useState } from "react";
import {
   Image,
   Text,
   TextInput,
   TouchableOpacity,
   View,
   ScrollView,
   ImageBackground,
} from "react-native";
import {
   blackBackground,
   GiftBox,
   Spotify,
   WholwBar,
   Diamond,
   TaylorSwift,
   DateSec,
   LogoLeft,
   LogoRight,
   logoPackSmall,
   progression,
   Tprogression,
   profilePic,
   ProfilePicFrame,
   LevelFrame,
   Ticket,
   Star,
   RectOne,
   RectTwo,
   BackgroundEvent,
   ShopBackground,
   Google,
   Outlook,
   Facebook
} from "../../../assets";
// import Footer from "../../components/Footer/Footer";
import styles from "./styles";

const SignInScreen = ({ navigation }) => {
   return (
      <ImageBackground source={ShopBackground} style={[styles.container]}>
         <View style={styles.bigContainer}>
            
  <TouchableOpacity style={styles.rightText} onPress={()=>navigation.navigate("HomeScreen")}>
                     <Image source={Google} style={styles.gLogo}/>
                     <Text style={styles.rectText}>Sign In With Goole</Text>
                  </TouchableOpacity>
<TouchableOpacity style={styles.rightText}  onPress={()=>navigation.navigate("HomeScreen")}>
                     <Image source={Facebook} style={styles.gLogo}/>
                     <Text style={styles.rectText}>Sign In With Facebook</Text>
                  </TouchableOpacity>
<TouchableOpacity style={styles.rightText} >
                      <Image source={Spotify} style={styles.gLogo}/>
                     <Text style={styles.rectText}>Sign In With Spotify</Text>
                  </TouchableOpacity>
         </View>
         {/* <Footer /> */}
      </ImageBackground>
   );
};

export default SignInScreen;
