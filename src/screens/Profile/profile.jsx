import React from "react";
import {
   Image,
   Text,
   TouchableOpacity,
   View,
   ScrollView,
   ImageBackground,
} from "react-native";
import {
   ShopBackground,
   VoiceBtn,
   MilesNo1,
   goldStar,
   profilePic,
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
} from "../../../assets";
import styles from "./styles";

const ProfileScreen = ({ navigation }) => {
   return (
      <ImageBackground source={ShopBackground} style={[styles.container]}>
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
               <Image source={BackBtn} style={styles.Btn} />
            </TouchableOpacity>

            <View style={styles.pageTop}>
               <Text style={styles.topText}>MILES</Text>
            </View>
         </View>

         <View style={styles.bigContainer}>
            <ScrollView style={styles.verticalScrollView}>
               <View style={styles.profileContainer}>
                  {/* profile picture */}
                  <View style={styles.picContainer}>
                     <View style={styles.picFrameContainer}>
                        {/* <Image source={ProfilePicFrame} style={styles.picFrame}/> */}
                        <Image source={profilePic} style={styles.profilePic} />
                     </View>
                  </View>

                  <View style={styles.totaCards}>
                     <View style={styles.textRow1}>
                        <Text style={styles.bold}>173 </Text>
                        <Text style={styles.simpleT}> Mirage Cards • </Text>
                        <Text style={styles.bold}>33</Text>
                        <Text style={styles.simpleT}> Legendary • </Text>
                        <Text style={styles.bold}>41</Text>
                        <Text style={styles.simpleT}> Rare • </Text>
                        <Text style={styles.bold}>99</Text>
                        <Text style={styles.simpleT}> Common</Text>
                     </View>
                     <View style={styles.textRow2}>
                        <Text style={styles.bold}>56</Text>
                        <Text style={styles.simpleT}> Mirage Tracks • </Text>
                        <Text style={styles.bold}>87</Text>
                        <Text style={styles.simpleT}>
                           {" "}
                           User Pushed on Tracks •{" "}
                        </Text>
                        <Text style={styles.bold}>99</Text>
                        <Text style={styles.simpleT}> Scans</Text>
                     </View>

                     <View style={styles.profileBottomSec}>
                        <View style={styles.levelSec}>
                           <Text style={styles.levelText}>Level</Text>
                           <View style={styles.levelCircle}>
                              <Text style={styles.level}>8</Text>
                           </View>
                        </View>

                        <View style={styles.levelSecR}>
                           <View>
                              <Text style={styles.midText1}>918 DAYS</Text>
                              <Text style={styles.midText2}>
                                 STREAMED MUSIC
                              </Text>
                           </View>

                           <TouchableOpacity style={styles.voiceLogo}>
                              <Image source={VoiceBtn} style={styles.logoBtn} />
                              <Text style={styles.logoT}>USER'S VOICE</Text>
                           </TouchableOpacity>
                        </View>
                     </View>
                  </View>
               </View>

               <View style={styles.topTrack}>
                  <View style={styles.leftText}>
                     <Image source={Top50} style={styles.topIcon} />
                     <Text style={styles.top50}> Mile's Top Tracks </Text>
                  </View>
               </View>

               <ScrollView
                  horizontal
                  style={styles.trackSec}
                  contentContainerStyle={{ paddingHorizontal: 20 }}
               >
                  <TouchableOpacity>
                     <Image source={MilesNo1} style={styles.image1} />
                     <View style={styles.textTrack}>
                        <View style={styles.nameAndView}>
                           <Text style={styles.title}>Imagine</Text>
                           <View>
                              <Text style={styles.viewss}>21M</Text>
                              <Image source={goldStar} style={styles.star} />
                           </View>
                        </View>
                        <Text style={styles.singerName}>John Lennon</Text>
                     </View>
                  </TouchableOpacity>

                  {/* <TouchableOpacity >
            <Image source={Track2} style={styles.image2}/>
            <View style={styles.textTrack}>
            <Text style={styles.title}>Bohemian Rhapsody</Text>
            <Text style={styles.singerName}>Queen</Text>
            <Text style={styles.by}>By <Text style={styles.changeColor}>AlanEth</Text></Text>
           </View></TouchableOpacity>

            <TouchableOpacity >
            <Image source={Track1} style={styles.image3}/>
            <View style={styles.textTrack}>
            <Text style={styles.title}>Hit Me Hard And Soft</Text>
            <Text style={styles.singerName}>Billie Eilish</Text>
            <Text style={styles.by}>By <Text style={styles.changeColor}>Miles</Text></Text>
           </View>
           </TouchableOpacity> */}
               </ScrollView>
            </ScrollView>
         </View>
      </ImageBackground>
   );
};

export default ProfileScreen;
