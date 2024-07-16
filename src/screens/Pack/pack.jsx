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
} from "../../../assets";

import styles from "./styles";

const PackScreen = ({ navigation }) => {
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
               <Text style={styles.topText}>mirage shop</Text>
            </View>
         </View>
         <View style={styles.bigContainer}>
            <ScrollView style={styles.verticalScrollView}>
               <View style={styles.popsec}>
                  <View style={styles.popCont}>
                     <Image source={PopSec} style={styles.popimg} />
                  </View>
                  <View style={styles.popMid}>
                     <Text style={styles.deal1}>10 Mirage Gem {"\n"} Pack</Text>
                     <Text style={styles.deal2}>100 Mirage Gem {"\n"}Pack</Text>
                     <Text style={styles.deal3}>
                        1000 Mirage {"\n"} Gem Pack
                     </Text>
                  </View>
               </View>

               <View style={styles.cardAndPack}>
                  <Text style={styles.cardAndPackH}> Cards & Gems Pack</Text>
               </View>

               <View style={styles.cardAndPackCont}>
                  <View style={styles.cardAndPackPics}>
                     <View style={styles.cardContainer}>
                        <Image
                           style={styles.cardAndPackImageL}
                           source={CardOne}
                        />
                        <Text style={styles.TextL}>
                           100 Mirage Gems & 10 Card Packs
                        </Text>
                        <Image style={styles.leftPrice} source={leftCardPr} />
                        <Image style={styles.leftPrice1} source={leftCardP} />
                        <TouchableOpacity style={styles.buyBox}>
                           <Text style={styles.buyText}> BUY NOW</Text>
                        </TouchableOpacity>
                     </View>
                     <View style={styles.middleLine} />
                     <View style={styles.cardContainer}>
                        <Image
                           style={styles.cardAndPackImageR}
                           source={CardOne}
                        />
                        <Text style={styles.TextR}>1 Mirage Card Pack </Text>
                        <Image style={styles.rightPrice} source={rightCardPr} />
                        <Image style={styles.rightPrice1} source={rightCardP} />

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
                  </View>
               </View>

               <View style={styles.cardAndPack}>
                  <Text style={styles.cardAndPackH}> Subscriptions</Text>
               </View>
               {/* <View style={styles.subsec}>
            <View style={styles.subCont}>
            <Image source={SubSec} style={styles.Subimg}/>
            </View>
            <View style={styles.subMid}>
               <Text style={styles.subDeal1}>Mirage Monthly</Text>
               <Text style={styles.subDeal2}>Mirage VIP Pass</Text>
               </View>
            </View> */}

               <View style={styles.PassPics}>
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
               </View>
            </ScrollView>
         </View>
          <Footer />
      </ImageBackground>
   );
};

export default PackScreen;
