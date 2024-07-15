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
import {blackBackground,GiftBox, Diamond,TaylorSwift, DateSec, LogoLeft, LogoRight, logoPackSmall ,progression, Tprogression, profilePic,ProfilePicFrame, LevelFrame } from "../../../assets";

import styles from "./styles";

const HomeScreen = ({ navigation }) => {
   return(
    <ImageBackground source={blackBackground} style={[styles.container] }>
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

       <View style={styles.bigContainer}>
      <ScrollView style={styles.verticalScrollView} contentContainerStyle={{
     }}>

<View style={styles.profileContainer}>
       
        <View style={styles.picContainer}>
        <View style={styles.picFrameContainer}>
          <Image source={ProfilePicFrame} style={styles.picFrame}/>
            <Image source={profilePic} style={styles.profilePic}/>
            </View>
            <View style={styles.logoTextContainer}>
            <Image source={logoPackSmall} style={styles.picLogo}/>
            <Text style={styles.picText}>VIP</Text>
            </View>
        </View>

       
      <View style={styles.progBarSec}>
        <View style={styles.progBarContainer}>
         <View style={styles.levT}>
         <Text style={styles.picTexxt}>level</Text></View>
          <Image source={Tprogression} style={styles.tProg}/>
            <Image source={progression} style={styles.progBar} />
            </View>
            <View style={styles.levelConta}>
            <Image source={LevelFrame} style={styles.levelFrame}/>
            <Text style={styles.level}>8</Text> 
            </View> 
        


      
      <View style={styles.gBox}>
         <Image source={GiftBox} style={styles.boxPic}/>
      </View>
      </View>
      </View>


     <View style={styles.celebName}>
         <Text style={styles.celebNameH}> Taylor swift</Text>
      </View>

      <View style={styles.celebPic}>
         <Image source={TaylorSwift} style={styles.celebPicAdjustment}/>
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
         <Image source={Diamond} style={styles.dimond}/>
      </View>


</ScrollView>
</View>
    </ImageBackground>
   );
};

export default HomeScreen;