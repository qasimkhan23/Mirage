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
import {Background,rightCardP,rightCardPr,vpp,vpP,mpP,mpp, MonthPass,VIPpass, leftCardP, leftCardPr, LogoLeft, LogoRight, BackBtn, Top50, Rect, Track1, Track2, trendF, One, Second, Third, AwardLogo, ThreeDays, PinkRect, MusicLogo, AwardOne, AwardTwo, ShopBackground, PopSec, SubSec, CardSec, CardOne, CardPa, RadioStation } from "../../../assets";

import styles from "./styles";

const RadioScreen = ({ navigation }) => {
   return (
      <ImageBackground source={ShopBackground} style={[styles.container] }>
                        <View style={styles.topConta}>
            <View style={styles.logoCont}>
              <Image source={LogoLeft} style={styles.logo} />
               <Text style={styles.logoText}>5400</Text>
            </View>
                     
            <View style={styles.logoCont}>
               <Image source={LogoRight} style={styles.logo} />
               <Text style={styles.logoText}>234</Text>
            </View>
            </View>
         <View style={styles.pagelogo}>
         <TouchableOpacity style={styles.backBtn}>
            <Image source={BackBtn} style={styles.Btn}/>
         </TouchableOpacity>

         <View style={styles.pageTop}>
               <Text style={styles.topText}>mirage radio station</Text>
         </View>
         </View>
       <View style={styles.bigContainer}>
          <ScrollView style={styles.verticalScrollView} >
            <View style={styles.aboveRadio}>

            </View>
        <View style={styles.radioContainer}>
            <Image source={RadioStation} style={styles.radioImage}/>
            </View>    
         </ScrollView> 
         </View>
      </ImageBackground>
   );
};

export default RadioScreen;
