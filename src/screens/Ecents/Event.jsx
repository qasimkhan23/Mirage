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
import {Background, LogoLeft, LogoRight, BackBtn, RectOne, RectTwo, Star, Ticket, Top50, Rect, Track1, Track2, trendF, One, Second, Third, AwardLogo, ThreeDays, PinkRect, MusicLogo, AwardOne, AwardTwo   } from "../../../assets";

import styles from "./Styles";

const EventScreen = ({ navigation }) => {
   return(
    <ImageBackground source={Background} style={[styles.container] }>
         <View style={styles.topCont}>
            <View style={styles.logoCont}>
              <Image source={LogoLeft} style={styles.logo} />
               <Text style={styles.logoText}>5400</Text>
            </View>
                     
            <View style={styles.logoCont}>
               <Image source={LogoRight} style={styles.logo} />
               <Text style={styles.logoText}>234</Text>
            </View>
         </View>


         <View style={styles.backBtn}>
            <Image source={BackBtn} style={styles.Btn}/>
         </View>

         
         <View>
         <View>
            <Image source={Star} style={styles.starImage}/>
         </View>
         <View>
            <Image source={Ticket} style={styles.ticket}/>
         </View>
         <View style={styles.rectangle}>
            <Image source={RectOne} style={styles.rectOne}/>
            <Image source={RectTwo} style={styles.rectTwo}/>
         </View>
         </View>

    </ImageBackground>
   );
};

export default EventScreen;