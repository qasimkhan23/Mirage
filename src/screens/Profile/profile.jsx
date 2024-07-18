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
   CardLogo,
   CardPic,
   MilesNo2,
   MilesNo1,
   goldStar,
   profilePic,
   LogoLeft,
   LogoRight,
   BackBtn,
   Top50,
   SLogo,
   FilterLogo,
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
import Footer from "../../components/Footer/Footer";

const ProfileScreen = ({ navigation }) => {
   return (
      <ImageBackground source={ShopBackground} style={[styles.container]}>
          <View style={styles.topConta}>
            <TouchableOpacity style={styles.logoCont}
            onPress={() => navigation.navigate("ShopScreen")}>
               <Image source={LogoLeft} style={styles.logo} />
               <Text style={styles.logoText}>5400</Text>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={() => navigation.navigate("PackScreen")}
            style={styles.logoCont}>
               <Image source={LogoRight} style={styles.logo} />
               <Text style={styles.logoText}>234</Text>
            </TouchableOpacity>
         </View>
         <View style={styles.pagelogo}>
            <TouchableOpacity
               style={styles.backBtn}
               onPress={() => navigation.goBack()}
            >
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
                     <TouchableOpacity style={styles.picFrameContainer}>
                        {/* <Image source={ProfilePicFrame} style={styles.picFrame}/> */}
                        <Image source={profilePic} style={styles.profilePic} />
                     </TouchableOpacity>
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
                           <View levelMid>
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
                     <Text style={styles.top50}> Miles's Top Tracks </Text>
                  </View>
               </View>

               <ScrollView
                  horizontal
                  style={styles.trackSec}
                  contentContainerStyle={{ paddingHorizontal: 20 }}
               >
                  <TouchableOpacity style={styles.num1}
                  onPress={() => navigation.navigate("PlayerScreen")}>
                     <Image source={MilesNo1} style={styles.image1} />
                     <View style={styles.textTrack}>
                        <View style={styles.nameAndView}>
                           <View style={styles.viewsline}>
                              <Text style={styles.title}>Imagine</Text>
                              <View style={styles.starP}>
                                 <Text style={styles.viewss}>21M</Text>
                                 <View style={styles.starCont}>
                                    <Image
                                       source={goldStar}
                                       style={styles.star}
                                    />
                                 </View>
                              </View>
                           </View>
                        </View>
                        <Text style={styles.singerName}>John Lennon</Text>
                     </View>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.num2}
                  onPress={() => navigation.navigate("PlayerScreen")}>
                     <Image source={MilesNo2} style={styles.image2} />
                     <View style={styles.textTrack2}>
                        <View style={styles.nameAndView}>
                           <View style={styles.viewsline}>
                              <Text style={styles.title}>Lose Yourself</Text>
                              <View style={styles.starP}>
                                 <Text style={styles.viewss}>413K</Text>
                              </View>
                           </View>
                        </View>
                        <Text style={styles.singerName}>Eminem</Text>
                     </View>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.num2}
                  onPress={() => navigation.navigate("PlayerScreen")}>
                     <Image source={MilesNo2} style={styles.image2} />
                     <View style={styles.textTrack2}>
                        <View style={styles.nameAndView}>
                           <View style={styles.viewsline}>
                              <Text style={styles.title}>Lose Yourself</Text>
                              <View style={styles.starP}>
                                 <Text style={styles.views}>413K</Text>
                              </View>
                           </View>
                        </View>
                        <Text style={styles.singerName}>Eminem</Text>
                     </View>
                  </TouchableOpacity>
               </ScrollView>

               <View style={styles.cardTop}>
                  <Image source={CardLogo} style={styles.cardlogo} />
                  <Text style={styles.eventText}>Miless's Cards</Text>
               
               <View style={styles.legendbox}>
                     {/* <Image source={LegendRect} style={styles.legendRect}/> */}
                     <Text style={styles.legendText}>LEGENDARY</Text>
                  </View>
                  <View style={styles.iconContainer}>
                     <TouchableOpacity style={styles.searchBox}>
                        <Text style={styles.searchText}>Search</Text>
                        <Image source={SLogo} style={styles.sLogo} />
                     </TouchableOpacity>
                     <TouchableOpacity>
                        <Image source={FilterLogo} style={styles.filterlogo} />
                     </TouchableOpacity>
                  </View></View>



               <ScrollView
                  horizontal
                  contentContainerStyle={{ paddingHorizontal: 20 }}
               >
                  <View style={styles.cards}>
                     <TouchableOpacity>
                        <Image source={CardPic} style={styles.cardpic} />
                     </TouchableOpacity>

                     <TouchableOpacity>
                        <Image source={CardPic} style={styles.cardpic} />
                     </TouchableOpacity>

                     <TouchableOpacity>
                        <Image source={CardPic} style={styles.cardpic} />
                     </TouchableOpacity>

                     <TouchableOpacity>
                        <Image source={CardPic} style={styles.cardpic} />
                     </TouchableOpacity>

                     <TouchableOpacity>
                        <Image source={CardPic} style={styles.cardpic} />
                     </TouchableOpacity>

                     <TouchableOpacity>
                        <Image source={CardPic} style={styles.cardpic} />
                     </TouchableOpacity>

                     <TouchableOpacity>
                        <Image source={CardPic} style={styles.cardpic} />
                     </TouchableOpacity>

                     <TouchableOpacity>
                        <Image source={CardPic} style={styles.cardpic} />
                     </TouchableOpacity>

                     <TouchableOpacity>
                        <Image source={CardPic} style={styles.cardpic} />
                     </TouchableOpacity>

                     <TouchableOpacity>
                        <Image source={CardPic} style={styles.cardpic} />
                     </TouchableOpacity>

                     <TouchableOpacity>
                        <Image source={CardPic} style={styles.cardpic} />
                     </TouchableOpacity>

                     <TouchableOpacity>
                        <Image source={CardPic} style={styles.cardpic} />
                     </TouchableOpacity>

                     <TouchableOpacity>
                        <Image source={CardPic} style={styles.cardpic} />
                     </TouchableOpacity>
                     <TouchableOpacity>
                        <Image source={CardPic} style={styles.cardpic} />
                     </TouchableOpacity>

                     <TouchableOpacity>
                        <Image source={CardPic} style={styles.cardpic} />
                     </TouchableOpacity>

                     <TouchableOpacity>
                        <Image source={CardPic} style={styles.cardpic} />
                     </TouchableOpacity>
                  </View>
               </ScrollView>
            </ScrollView>
         </View>
         <Footer />
      </ImageBackground>
   );
};

export default ProfileScreen;
