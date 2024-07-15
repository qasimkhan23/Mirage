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
import {Background,rightCardP,rightCardPr, leftCardP, leftCardPr, LogoLeft, LogoRight, BackBtn, Top50, Rect, Track1, Track2, trendF, One, Second, Third, AwardLogo, ThreeDays, PinkRect, MusicLogo, AwardOne, AwardTwo, ShopBackground, PopSec, SubSec, CardSec, CardOne, CardPa } from "../../../assets";

import styles from "./styles";

const ShopScreen = ({ navigation }) => {
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
               <Text style={styles.topText}>mirage shop</Text>
         </View>
         </View>
       <View style={styles.bigContainer}>
          <ScrollView style={styles.verticalScrollView} >
        
         <View style={styles.popsec}>
            <View style={styles.popCont}>
            <Image source={PopSec} style={styles.popimg}/></View>
            <View style={styles.popMid}>
               <Text style={styles.deal1}>10 Mirage Gem {'\n'} Pack</Text>
               <Text style={styles.deal2}>100 Mirage Gem {'\n'}Pack</Text>
               <Text style={styles.deal3}>1000 Mirage {'\n'} Gem Pack</Text>
               </View>
            </View>

            <View style={styles.cardAndPack}>
               <Text style={styles.cardAndPackH}> Cards & Gems Pack</Text>
            </View>

      <View style={styles.cardAndPackCont}>
      <View style={styles.cardAndPackPics}>
        <View style={styles.cardContainer}>
          <Image style={styles.cardAndPackImageL} source={CardOne} />
          <Text style={styles.TextL}>100 Mirage Gems & 10 Card Packs</Text>
          <Image style={styles.leftPrice} source={leftCardPr}/>
          <Image style={styles.leftPrice1} source={leftCardP}/>
        </View>
        <View style={styles.middleLine} />
        <View style={styles.cardContainer}>
          <Image style={styles.cardAndPackImageR} source={CardOne} />
          <Text style={styles.TextR}>1 Mirage Card Pack </Text>
          <Image style={styles.rightPrice} source={rightCardPr}/>
          <Image style={styles.rightPrice1} source={rightCardP}/>
        </View>
      </View>
    </View>





        {/*  </View>


         <TouchableOpacity style={styles.backBtn}>
            <Image source={BackBtn} style={styles.Btn}/>
         </TouchableOpacity>

         <View style={styles.popsec}>
            <Image source={PopSec} style={styles.popimg}/>
            <View style={styles.popMid}>
               <Text style={styles.popMid1}>10 Mirage Gem {'\n'} Pack</Text>
               <Text style={styles.popMid2}>100 Mirage Gem {'\n'}Pack</Text>
               <Text style={styles.popMid3}>1000 Mirage {'\n'} Gem Pack</Text>
               </View>
         </View>

         <View style={styles.cardsec}>
            <Text style={styles.cardH}>cardCard & Gem Packs</Text>
            <Image source={CardSec} style={styles.cardimg} />
            <View style={styles.middleText1}>
               <Text style={styles.middleLeft}>100 Mirage Gems & Cards Packs</Text>
               <Text style={styles.middleRight}>1 Mirage Card Pack</Text>
               </View>
                <View style={styles.middleText2}>
               <Text style={styles.middleRightDown}>BUY NOW</Text>
               <Text style={styles.middleLeftDown}>BUY NOW</Text>
            </View>
         </View>

        <View style={styles.subsec}>
          <Text style={styles.subH}>Subscriptions</Text>
            <Image source={SubSec} style={styles.subimg}/>
            <View style={styles.subText}>
               <Text style={styles.subRight}>Mirage Monthly Pass</Text>
               <Text style={styles.subLeft}>Mirage VIP Pass</Text>
            </View>
         </View> */}
         
         </ScrollView> 
         </View>
      </ImageBackground>
   );
};

export default ShopScreen;
