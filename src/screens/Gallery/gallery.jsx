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
   LegCar,
   GallBackground,
   PopSec,
   SubSec,
   CardSec,
   TC,
   CardPic
} from "../../../assets";

import styles from "./styles";
import Footer from "../../components/Footer/Footer";

const GalleryScreen = ({ navigation }) => {
   return (
      <ImageBackground source={GallBackground} style={[styles.container]}>
         <ScrollView style={styles.verticalScrollView}>
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
            <TouchableOpacity
               style={styles.backBtn}
               onPress={() => navigation.goBack()}
            >
               <Image source={BackBtn} style={styles.Btn} />
            </TouchableOpacity>

            <View style={styles.pageTop}>
               <Text style={styles.topText}>mirage gallery</Text>
            </View>
         </View>
            <View style={styles.bigContainer}>
               
               <View style={styles.cardsH}>
                  <Text style={styles.cardT}>ALL CARDS</Text>
               </View>

               <View style={styles.topTrack}>
                  <View style={styles.leftText}>
                     <Image source={TC} style={styles.topIcon} />
                     <Text style={styles.top50}>
                        {" "}
                        Trending Legendary Cards{" "}
                     </Text>
                  </View>
                  <TouchableOpacity style={styles.rightText}>
                     <Image source={Rect} style={styles.rectangle} />
                     <Text style={styles.rectText}>SEE ALL</Text>
                  </TouchableOpacity>
               </View>
               

               <ScrollView
                  horizontal
                  contentContainerStyle={{ paddingHorizontal: 20 }}
               >
                  <View style={styles.cardSec}>
                     <TouchableOpacity>
                        <View style={styles.cards}>
                        <Image source={LegCar} style={styles.LCard} />
                        </View>
                     </TouchableOpacity>

                     <TouchableOpacity>
                        <View style={styles.cards}>
                        <Image source={LegCar} style={styles.LCard} />
                        </View>
                     </TouchableOpacity>

                     <TouchableOpacity>
                        <View style={styles.cards}>
                        <Image source={LegCar} style={styles.LCard} />
                        </View>
                     </TouchableOpacity>

                     <TouchableOpacity>
                       <View style={styles.cards}>
                        <Image source={LegCar} style={styles.LCard} />
                        </View>
                     </TouchableOpacity>

                     <TouchableOpacity>
                        <View style={styles.cards}>
                        <Image source={LegCar} style={styles.LCard} />
                        </View>
                     </TouchableOpacity>

                     <TouchableOpacity>
                       <View style={styles.cards}>
                        <Image source={LegCar} style={styles.LCard} />
                        </View>
                     </TouchableOpacity>

                     <TouchableOpacity>
                        <View style={styles.cards}>
                        <Image source={LegCar} style={styles.LCard} />
                        </View>
                     </TouchableOpacity>

                     <TouchableOpacity>
                       <View style={styles.cards}>
                        <Image source={LegCar} style={styles.LCard} />
                        </View>
                     </TouchableOpacity>

                     <TouchableOpacity>
                        <View style={styles.cards}>
                        <Image source={LegCar} style={styles.LCard} />
                        </View>
                     </TouchableOpacity>
                  </View>
               </ScrollView>

            

            <View style={styles.expcar}>
                  <Text style={styles.expT}>Explore Cards</Text>
                  <View style={styles.legendbox}>
                     <Text style={styles.legendText}>LEGENDARY</Text>
                  </View>
               </View>

                <ScrollView horizontal
                style={styles.trackHor}
                  contentContainerStyle={{ paddingHorizontal: 20 }}>
                  <View style={styles.smallCards}>
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

</View>
         </ScrollView>
        <Footer />
      </ImageBackground>
   );
};

export default GalleryScreen;
