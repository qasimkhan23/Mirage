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
   FooterBackground,
   FooterHome,
   TaylorSwift,
   FooterStudio,
   FooterRadio,
   FooterCharts,
} from "../../../assets";
import { useNavigation } from "@react-navigation/native";

import styles from "./Styles";

const BottomNavBar = () => {
   const navigation = useNavigation();

   const handleClick = () => {
      navigation.navigate("ShopScreen");
   };

   return (
      <View style={styles.container}>
         <ImageBackground
            source={FooterBackground}
            style={styles.backgroundImg}
         >
            <View style={styles.iconsContainer}>
               <TouchableOpacity
                  onPress={() => navigation.navigate("HomeScreen")}
               >
                  <Image source={FooterHome} style={styles.homeIcon} />
               </TouchableOpacity>
               <TouchableOpacity
                  onPress={() => navigation.navigate("HomeScreen")}
               >
                  <Image source={FooterStudio} style={styles.studioIcon} />
               </TouchableOpacity>
               <TouchableOpacity
                  onPress={() => navigation.navigate("RadioScreen")}
               >
                  <Image source={FooterRadio} style={styles.radioIcon} />
               </TouchableOpacity>
               <TouchableOpacity
                  onPress={() => navigation.navigate("ChartsStack")}
               >
                  <Image source={FooterCharts} style={styles.chartsIcon} />
               </TouchableOpacity>
            </View>
         </ImageBackground>
      </View>
   );
};

export default BottomNavBar;
