import React, { useEffect, useState } from "react";
import {
   Image,
   Text,
   TextInput,
   TouchableOpacity,
   View,
   Linking,
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
   Facebook,
   FinalBG,
   MiLogo,
   MILogo,
} from "../../../assets";
// import Footer from "../../components/Footer/Footer";
import styles from "./styles";

const FinalScreen = ({ navigation }) => {
   const openLink = () => {
      Linking.openURL("https://demo.miragemusic.co/");
   };
   return (
      <ImageBackground source={FinalBG} style={[styles.container]}>
         <View style={styles.bigContainer}>
            <View
               style={styles.rightText}
               onPress={() => navigation.navigate("HomeScreen")}
            >
               <View style={styles.allText}>
                  <Text style={styles.rectText}>
                     {" "}
                     Be part of the next Music Revolution. Support Mirage
                     <View style={styles.Logo}>
                        <Image source={MILogo} style={styles.logo} />
                     </View>
                     <TouchableOpacity onPress={openLink}>
                        <Text style={styles.linkText}>miragemusic.co</Text>
                     </TouchableOpacity>{" "}
                  </Text>
               </View>
            </View>
         </View>
         {/* <Footer /> */}
      </ImageBackground>
   );
};

export default FinalScreen;
