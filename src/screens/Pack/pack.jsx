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
   PackBackground,
   PopSec,
   SubSec,
   CardSec,
   CardOne,
   CardPa,
   ShopBackground,
   packDate,
   LeftPackPic,
   RightPackPic,
   MiLogo,
   pRain,
   PurPack,
   PackDate,
} from "../../../assets";
import Footer from "../../components/Footer/Footer";
import styles from "./styles";

const PackScreen = ({ navigation }) => {
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
               <Text style={styles.topText}>MIRAGE EXCLUSIVE PACKS</Text>
            </View>
         </View>
         <View style={styles.cardsH}>
                  <Text style={styles.cardT}>ALL CARDS</Text>
               </View>
         <View style={styles.bigContainer}>
            <ScrollView style={styles.verticalScrollView}>
               <View style={styles.popsec}>
                  <View style={styles.popCont}>
                     <Image source={PurPack} style={styles.popimg} />
                     <Image source={pRain} style={styles.Rainimg} />
                  </View>
                  <View style={styles.daysLeft}>
                     <Text style={styles.daysT}>23 DAYS LEFT</Text>
                  </View>
                  <ImageBackground source={PackDate} style={styles.packBg}>
                  <View style={styles.packPic}>
                     
                        <View style={styles.eventD}>
                        <Text style={styles.event}>Event</Text>
                        <Text style={styles.mon}>MAY'25</Text>
                        </View>
                        <View style={styles.eventN}>
                        <Text style={styles.eventName}>Purple Rain</Text>
                        <Text style={styles.forty}>  40th</Text>
                        </View>
                     
                  </View></ImageBackground>
               </View>

               <View style={styles.cardAndPack}>
                  <Text style={styles.cardAndPackH}> Purple Rain 40th Anniversary Cards</Text>
               </View>

               <View style={styles.cardAndPackCont}>
                  <View style={styles.cardAndPackPics}>
                     <View style={styles.cardContainer}>
                        <Image
                           style={styles.cardAndPackImageL}
                           source={LeftPackPic}
                        />
                        <Text style={styles.TextL}>
                           Purple Rain Card Pack 
                        </Text>
                        <View style={styles.priceAndlogo}>
                        <Image style={styles.leftPrice} source={MiLogo} />
                        <Text  style={styles.logoText}>100</Text></View>
                        
                      <View style={styles.buyBoxRight}>
                           <TouchableOpacity style={styles.buyBoxM}>
                              <Text style={styles.buyTextM}> - </Text>
                           </TouchableOpacity>

                           <TouchableOpacity style={styles.buyBoxR}>
                              <Text style={styles.buyTextR}> BUY NOW</Text>
                           </TouchableOpacity>

                           <TouchableOpacity style={styles.buyBoxP}>
                              <Text style={styles.buyTextP}> + </Text>
                           </TouchableOpacity>
                        </View>



                        
                     </View>
                     <View style={styles.middleLine} />
                     <View style={styles.cardContainer}>
                        <Image
                           style={styles.cardAndPackImageR}
                           source={RightPackPic}
                        />
                        <Text style={styles.TextR}>Mirage Gems & Purple Rain Packs</Text>
                        <View style={styles.priceAndlogo}>
                        <Image style={styles.leftPrice} source={MiLogo} />
                        <Text  style={styles.logoText}>1000</Text>
                        </View>
                       <TouchableOpacity style={styles.buyBox}>
                           <Text style={styles.buyText}> BUY NOW</Text>
                        </TouchableOpacity>

                     </View>
                  </View>
               </View>





             {/*   <View style={styles.cardAndPack}>
                  <Text style={styles.cardAndPackH}>Exclusive Purple Rain Tracks</Text>
               </View> */}
               

               {/* <View style={styles.PassPics}>
                  <View style={styles.passTextContainer}>
                     <Image style={styles.passPicL} source={MonthPass} />
                     <View>
                        <Text style={styles.PassTextLeft}>
                           Mirage Monthly Pass
                        </Text>
                        <TouchableOpacity>
                           <Image style={styles.leftPassPrice1} source={mpP} />
                        </TouchableOpacity>
                     </View>
                  </View>
                  <View style={styles.passTextContainer}>
                     <Image style={styles.passPicR} source={VIPpass} />
                     <View>
                        <Text style={styles.PassTextRight}>
                           Mirage VIP Pass{" "}
                        </Text>
                        <TouchableOpacity>
                           <Image style={styles.rightPassPrice} source={vpp} />
                        </TouchableOpacity>
                     </View>
                  </View>
               </View> */}
            </ScrollView>
         </View>
          <Footer />
      </ImageBackground>
   );
};

export default PackScreen;
