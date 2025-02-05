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
   blackBackground,
   GiftBox,
   WholwBar,
   RectSc,
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
   RectTwo
} from "../../../assets";
import Footer from "../../components/Footer/Footer";
import styles from "./styles";

const HomeScreen = ({ navigation }) => {
   return (
      <ImageBackground source={blackBackground} style={[styles.container]}>
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

         <View style={styles.bigContainer}>
            <ScrollView
               style={styles.verticalScrollView}
               contentContainerStyle={{}}
            >
               <View style={styles.profileContainer}>
                  {/* profile picture */}
                  <View style={styles.picContainer}>
                     <TouchableOpacity style={styles.picFrameContainer} 
                     onPress={() => navigation.navigate("ProfileScreen")}>
                        <Image source={profilePic} style={styles.profilePic} />
                     </TouchableOpacity>

                     <View style={styles.logoTextContainer}>
                        <Image source={logoPackSmall} style={styles.picLogo} />
                        <Text style={styles.picText}>VIP</Text>
                     </View>
                  </View>

                  <View style={styles.progBarSec}>
                     <View style={styles.progBarContainer}>
                        <View style={styles.levT}>
                           <Text style={styles.picTexxt}>level</Text>
                        </View>
                        <View style={styles.barImage}>
                           <Image source={WholwBar} style={styles.tProg} />
                        </View>
                     </View>
                     <View style={styles.levelConta}>
                        <Text style={styles.level}>8</Text>
                     </View>

                     <TouchableOpacity style={styles.gBox}>
                        <Image source={GiftBox} style={styles.boxPic} />
                     </TouchableOpacity>
                  </View>
               </View>

               <View style={styles.celebName}>
                  <Text style={styles.celebNameH}> Taylor swift</Text>
               </View>

               <View style={styles.celebPic}>
                  <Image
                     source={TaylorSwift}
                     style={styles.celebPicAdjustment}
                  />
               </View>

               <View style={styles.dateContainer}>
                  <ImageBackground source={DateSec} style={styles.dateBg}>
                     <View style={styles.dates}>
                        <Text style={styles.dateText}>JUNE'24</Text>
                        <Text style={styles.dateText}>POP & RNB</Text>
                        <Text style={styles.dateText}>2020's</Text>
                     </View>
                  </ImageBackground>
               </View>

               <View style={styles.dimondPic}>
                  <Image source={Diamond} style={styles.dimond} />
               </View>

               <View style={styles.ticImage}>
                  <TouchableOpacity style={styles.ticketSec}
                  onPress={() => navigation.navigate("EventScreen")}>
                     <Image source={Ticket} style={styles.ticket} />
                     <Image source={Star} style={styles.starImage} />
                  </TouchableOpacity>
                  
                  <View style={styles.ticketBottom}>
                     <Image source={RectOne} style={styles.rectOne} />
                    <TouchableOpacity> 
                     <Image source={RectSc} style={styles.rectSc} />
                     </TouchableOpacity>

                     <TouchableOpacity>
                        <Image source={RectTwo} style={styles.rectTwo} />
                     </TouchableOpacity>
                  </View>
               </View>



            </ScrollView>
         </View>
         <Footer />
      </ImageBackground>
   );
};

export default HomeScreen;
