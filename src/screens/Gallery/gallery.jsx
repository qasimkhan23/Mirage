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
import {Background, LogoLeft, LogoRight, BackBtn, Top50, Rect, Track1, Track2, trendF, One, Second, Third, AwardLogo, ThreeDays, PinkRect, MusicLogo, AwardOne, AwardTwo,LegCar, GallBackground, PopSec, SubSec, CardSec, TC } from "../../../assets";

import styles from "./styles";

const GalleryScreen = ({ navigation }) => {
   return (
      <ImageBackground source={GallBackground} style={[styles.container] }>
          <ScrollView style={styles.verticalScrollView} >
         <View style={styles.bigContainer}>
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

         <TouchableOpacity style={styles.backBtn}>
            <Image source={BackBtn} style={styles.Btn}/>
         </TouchableOpacity>
            
        <View style={styles.cardsH}>
            <Text style={styles.cardT}>
                ALL CARDS
            </Text>
        </View>

         <View style={styles.topTrack}>
            <View style={styles.leftText}>
               <Image source={TC} style={styles.topIcon}/>
               <Text style={styles.top50}> Trending Legendary Cards </Text>
            </View>
            <TouchableOpacity style={styles.rightText}>
               <Image source={Rect} style={styles.rectangle}/>
               <Text style={styles.rectText}>SEE ALL</Text>
            </TouchableOpacity>
         </View>

          <ScrollView  horizontal contentContainerStyle={{paddingHorizontal:20}} >
            <View style={styles.cards}>
           <TouchableOpacity >
            <Image source={LegCar} style={styles.LCard}/>
           </TouchableOpacity>

            <TouchableOpacity >
               <Image source={LegCar} style={styles.LCard}/>
            </TouchableOpacity>

            <TouchableOpacity >
            <Image source={LegCar} style={styles.LCard}/>
           </TouchableOpacity>

           <TouchableOpacity >
            <Image source={LegCar} style={styles.LCard}/>
           </TouchableOpacity>

           <TouchableOpacity >
            <Image source={LegCar} style={styles.LCard}/>
           </TouchableOpacity>

           <TouchableOpacity >
            <Image source={LegCar} style={styles.LCard}/>
           </TouchableOpacity>

           <TouchableOpacity >
            <Image source={LegCar} style={styles.LCard}/>
           </TouchableOpacity>

           <TouchableOpacity >
            <Image source={LegCar} style={styles.LCard}/>
           </TouchableOpacity>

           <TouchableOpacity >
            <Image source={LegCar} style={styles.LCard}/>
           </TouchableOpacity>

           <TouchableOpacity >
            <Image source={LegCar} style={styles.LCard}/>
           </TouchableOpacity>

           </View>
         </ScrollView>

        
        <View style={styles.expcar}>
            <Text style={styles.expT}>Explore Cards</Text>
        </View>

         </View>
         </ScrollView> 
      </ImageBackground>
   );
};

export default GalleryScreen;
