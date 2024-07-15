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
   Background,
   rightCardP,
   rightCardPr,
   vpp,
   vpP,
   mpP,
   mpp,
   MonthPass,
   VIPpass,
   leftCardP,
   leftCardPr,
   LogoLeft,
   LogoRight,
   BackBtn,
   Top50,
   Rect,
   Track1,
   Track2,
   trendF,
   One,
   Second,
   Third,
   AwardLogo,
   ThreeDays,
   PinkRect,
   MusicLogo,
   AwardOne,
   AwardTwo,
   ShopBackground,
   PopSec,
   SubSec,
   CardSec,
   CardOne,
   CardPa,
   RadioStation,
   image2,
} from "../../../assets";
import Footer from "../../components/Footer/Footer";
import AudioSlider from "../../components/AudioSlider/AudioSlider";
import AudioFile from "../../../assets/counting.m4a";
import styles from "./styles";

const PlayerScreen = ({ navigation }) => {
   return (
      <ImageBackground source={ShopBackground} style={[styles.container]}>
         <View style={styles.bodyContainer}>
            <TouchableOpacity>
               <Image source={Track2} style={styles.image2} />
               <View style={styles.textTrack}>
                  <Text style={styles.title}>Bohemian Rhapsody</Text>
                  <Text style={styles.singerName}>Queen</Text>
                  <Text style={styles.by}>
                     By <Text style={styles.changeColor}>AlanEth</Text>
                  </Text>
               </View>
            </TouchableOpacity>
         </View>
         <View
            style={{
               backgroundColor: "white",
               position: "absolute",
               bottom: 30,
               right: 0,
               left: 0,
            }}
         >
            <AudioSlider audio={AudioFile} />
         </View>
      </ImageBackground>
   );
};

export default PlayerScreen;
