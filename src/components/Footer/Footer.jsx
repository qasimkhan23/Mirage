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
   FooterProfile,
   FooterEvents,
   FooterPacks,
   FooterGallery,
   FooterContact,
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
            <ScrollView horizontal style={styles.iconsContainer}>
               <View
                  style={{
                     flexDirection: "row",
                     alignItems: "center",
                  }}
               >
                  <TouchableOpacity
                     onPress={() => navigation.navigate("HomeScreen")}
                  >
                     <Image source={FooterHome} style={styles.homeIcon} />
                  </TouchableOpacity>
                  <TouchableOpacity
                     onPress={() => navigation.navigate("ProfileScreen")}
                  >
                     <Image source={FooterProfile} style={styles.profileIcon} />
                  </TouchableOpacity>
                  <TouchableOpacity
                     onPress={() => navigation.navigate("EventScreen")}
                  >
                     <Image source={FooterEvents} style={styles.studioIcon} />
                  </TouchableOpacity>
                  <TouchableOpacity
                     onPress={() => navigation.navigate("PackScreen")}
                  >
                     <Image source={FooterPacks} style={styles.studioIcon} />
                  </TouchableOpacity>
                  <TouchableOpacity
                     onPress={() => navigation.navigate("GalleryScreen")}
                  >
                     <Image source={FooterGallery} style={styles.studioIcon} />
                  </TouchableOpacity>
                  <TouchableOpacity
                     onPress={() => navigation.navigate("StudioScreen")}
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
                  <TouchableOpacity
                     onPress={() => navigation.navigate("FinalScreen")}
                  >
                     <Image source={FooterContact} style={styles.chartsIcon} />
                  </TouchableOpacity>
               </View>
            </ScrollView>
         </ImageBackground>
      </View>
   );
};

export default BottomNavBar;
