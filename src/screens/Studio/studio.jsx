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
   
   ShopBackground,
   PopSec,
   SubSec,
   CardSec,
   CardOne,
   CardPa,
   RadioStation,
   StudioScreenImage
} from "../../../assets";
import Footer from "../../components/Footer/Footer";
import styles from "./styles";

const StudioScreen = ({ navigation }) => {
   return (
      <ImageBackground source={ShopBackground} style={[styles.container]}>
         <View>
            <Image source={StudioScreenImage} style={{resizeMode:'contain',height:'100%'}} />
         </View>
         <Footer />
      </ImageBackground>
   );
};

export default StudioScreen;
