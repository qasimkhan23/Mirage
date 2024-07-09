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
import {Background, LogoLeft, LogoRight, BackBtn, Top50, Rect, Track1, Track2, trendF, One, Second, Third, AwardLogo, ThreeDays, PinkRect, MusicLogo, AwardOne, AwardTwo   } from "../../../assets";

import styles from "./Styles";

const ChartsScreen = ({ navigation }) => {
   return (
      <ImageBackground source={Background} style={[styles.container] }>
          <ScrollView vertical>
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


         <View style={styles.topTrack}>
            <View style={styles.leftText}>
               <Image source={Top50} style={styles.topIcon}/>
               <Text style={styles.top50}> Top 50 Tracks </Text>
            </View>
            <View style={styles.rightText}>
               <Image source={Rect} style={styles.rectangle}/>
               <Text style={styles.rectText}>SEE ALL</Text>
            </View>
         </View>


          
            <ScrollView horizontal style={styles.trackSec} >
           <View >
            <Image source={Track1} style={styles.image1}/>
            <View style={styles.textTrack}>
            <Text style={styles.title}>Hit Me Hard And Soft</Text>
            <Text style={styles.singerName}>Billie Eilish</Text>
            <Text style={styles.by}>By <Text style={styles.changeColor}>Miles</Text></Text>
           </View>
           </View>

            <View >
            <Image source={Track2} style={styles.image2}/>
            <View style={styles.textTrack}>
            <Text style={styles.title}>Bohemian Rhapsody</Text>
            <Text style={styles.singerName}>Queen</Text>
            <Text style={styles.by}>By <Text style={styles.changeColor}>AlanEth</Text></Text>
           </View></View>

            <View >
            <Image source={Track1} style={styles.image3}/>
            <View style={styles.textTrack}>
            <Text style={styles.title}>Hit Me Hard And Soft</Text>
            <Text style={styles.singerName}>Billie Eilish</Text>
            <Text style={styles.by}>By <Text style={styles.changeColor}>Miles</Text></Text>
           </View>
           </View>
         </ScrollView>
          



 <View style={styles.artistSec}>
            <View style={styles.logos}>
               <Image source={trendF} style={styles.trendImg}/>
               <Text style={styles.trendText}> Trending Artists</Text>
            </View>
            <View style={styles.rightText}>
               <Image source={Rect} style={styles.rectangle}/>
               <Text style={styles.rectText}>SEE ALL</Text>
            </View>
         </View>

            <ScrollView horizontal style={styles.trendSec}>
            
               <View style={styles.siee}>
                  <Image source={One} style={styles.sieImg}/>
                  <Text  style={styles.name}>Sierra Farrel</Text>
               </View>

            <View style={styles.to}>
                  <Image source={Second} style={styles.bigImg}/>
                  <Text  style={styles.name}>Notorious Big</Text>
               </View>

            <View style={styles.three}>
                  <Image source={Third} style={styles.harryImg}/>
                  <Text  style={styles.name}>Harry Styles</Text>
               </View>

            <View style={styles.siee}>
                  <Image source={One} style={styles.sieImg2}/>
                  <Text  style={styles.name}>Sierra Farrel</Text>
               </View>
           
         </ScrollView>
        


          <View style={styles.awardSec}>
            <View style={styles.logos}>
               <Image source={AwardLogo} style={styles.awardImg}/>
               <View style={styles.makeCol}>
               <Image source={ThreeDays} style={styles.daypng}/>
               <Text style={styles.trendText}> Mirage Music Awards 2025</Text>
               </View>
            </View>
            <View style={styles.voteText}>
               <Image source={PinkRect} style={styles.rectanglee}/>
                <Image source={MusicLogo} style={styles.logomusic}/>
               <Text style={styles.rectaText}>VOTE NOW</Text>
            </View>
         </View>

          <ScrollView horizontal style={styles.awardImages}>
            <View>
               <Image source={AwardOne} style={styles.awardImages1}/>
            </View>

            <View>
               <Image source={AwardTwo} style={styles.awardImages2}/>
            </View>

            <View>
               <Image source={AwardOne} style={styles.awardImages3}/>
            </View>
         </ScrollView> 
         </ScrollView> 
      </ImageBackground>
   );
};

export default ChartsScreen;
