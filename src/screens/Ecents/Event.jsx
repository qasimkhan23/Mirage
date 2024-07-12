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
import {BackgroundEvent, LogoLeft, LogoRight, BackBtn, RectOne, RectTwo, Star, Ticket, Top50, Rect, picOne, picTwo, duaOne, Search, CardLogo, FilterLogo, LegendRect, CardPic } from "../../../assets";

import styles from "./Styles";

const EventScreen = ({ navigation }) => {
   return(
    <ImageBackground source={BackgroundEvent} style={[styles.container] }>
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
            <Image source={BackBtn} style={styles.Btn}/>
         </TouchableOpacity>

         <View style={styles.pageTop}>
               <Text style={styles.topText}>mirage events</Text>
         </View>
         </View>
       <View style={styles.bigContainer}>
      <ScrollView style={styles.verticalScrollView} contentContainerStyle={{
     }}>

          {/* <View style={styles.topConta}>
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
            <Image source={BackBtn} style={styles.Btn}/>
         </TouchableOpacity>

         <View style={styles.pageTop}>
               <Text style={styles.topText}>mirage events</Text>
         </View>
         </View>  */}

         <View style={styles.ticImage}>
       <View style={styles.ticketSec}>
                  <Image source={Ticket} style={styles.ticket} />
                  <Image source={Star} style={styles.starImage} />
               </View>
         <View style={styles.ticketBottom}>
            <Image source={RectOne} style={styles.rectOne}/>
            <TouchableOpacity>
            <Image source={RectTwo} style={styles.rectTwo}/>
            </TouchableOpacity>
         </View>
         </View>

          <View style={styles.topTrack}>
            <View style={styles.leftText}>
               <Image source={Top50} style={styles.topIcon}/>
               <Text style={styles.top50}> DUA LIPA TOP Tracks </Text>
            </View>
            <TouchableOpacity style={styles.rightText}>
               <Image source={Rect} style={styles.rectangle}/>
               <Text style={styles.rectText}>SEE ALL</Text>
            </TouchableOpacity>
         </View>

         <View style={{flex:1,display:'flex',flexDirection:'row'}}>
         <ScrollView horizontal  style={styles.trackSec} contentContainerStyle={{paddingHorizontal:20,height:"100%",paddingVertical:20}} >
         

        
           <TouchableOpacity>
            <Image source={picOne} style={styles.image1}/>
            <View style={styles.textTrack}>
            <Text style={styles.title}>One Kiss</Text>
            <Text style={styles.singerName}>Dua Lipa (with Calvin Harris) </Text>
            <View style={styles.makeRow}>
            <Text style={styles.by}>By <Text style={styles.changeColor}>PeruBoy</Text></Text>
            <View style={styles.duaInfo}>
            <ImageBackground source={duaOne} style={styles.image4}/>
            <Text style={styles.duaText}>wins Cat.A Seat Ticket</Text></View>
           </View>
           </View>
           </TouchableOpacity>

            <TouchableOpacity >
            <Image source={picTwo} style={styles.image2}/>
            <View style={styles.textTrack}>
            <Text style={styles.title}>New Rules</Text>
            <Text style={styles.singerName}>Dua Lipa</Text>
            <Text style={styles.by}>By <Text style={styles.changeColor}>JessBeth21</Text></Text>
           </View></TouchableOpacity>

            <TouchableOpacity >
            <Image source={picOne} style={styles.image3}/>
            <View style={styles.textTrack}>
            <Text style={styles.title}>One Kiss</Text>
            <Text style={styles.singerName}>Dua Lipa with Calvin Harris </Text>
            <Text style={styles.by}>By <Text style={styles.changeColor}>PeruBoy</Text></Text>
           </View>
           </TouchableOpacity>
         </ScrollView>
            </View>
 

         <View style={styles.cardTop}>
            <Image source={CardLogo} style={styles.cardlogo}/>
            <Text style={styles.eventText}>Event's Cards</Text>
            <View style={styles.legendbox}>
               <Image source={LegendRect} style={styles.legendRect}/>
               <Text style={styles.legendText}>LEGENDARY</Text>
            </View>
         <View style={styles.iconContainer}>
        <TouchableOpacity>
            <Image source={Search} style={styles.searchBox}/>
        </TouchableOpacity>
        <TouchableOpacity>
            <Image source={FilterLogo} style={styles.filterlogo}/>
        </TouchableOpacity>
         </View>
         </View>

          <ScrollView>
            <View style={styles.cards}>
           <TouchableOpacity >
            <Image source={CardPic} style={styles.cardpic}/>
           </TouchableOpacity>

            <TouchableOpacity >
               <Image source={CardPic} style={styles.cardpic}/>
            </TouchableOpacity>

            <TouchableOpacity >
            <Image source={CardPic} style={styles.cardpic}/>
           </TouchableOpacity>

           <TouchableOpacity >
            <Image source={CardPic} style={styles.cardpic}/>
           </TouchableOpacity>

           <TouchableOpacity >
            <Image source={CardPic} style={styles.cardpic}/>
           </TouchableOpacity>

           <TouchableOpacity >
            <Image source={CardPic} style={styles.cardpic}/>
           </TouchableOpacity>

           <TouchableOpacity >
            <Image source={CardPic} style={styles.cardpic}/>
           </TouchableOpacity>

           <TouchableOpacity >
            <Image source={CardPic} style={styles.cardpic}/>
           </TouchableOpacity>

           <TouchableOpacity >
            <Image source={CardPic} style={styles.cardpic}/>
           </TouchableOpacity>

           <TouchableOpacity >
            <Image source={CardPic} style={styles.cardpic}/>
           </TouchableOpacity>

<TouchableOpacity >
            <Image source={CardPic} style={styles.cardpic}/>
           </TouchableOpacity>

           <TouchableOpacity >
            <Image source={CardPic} style={styles.cardpic}/>
           </TouchableOpacity>

           <TouchableOpacity >
            <Image source={CardPic} style={styles.cardpic}/>
           </TouchableOpacity>
           <TouchableOpacity >
            <Image source={CardPic} style={styles.cardpic}/>
           </TouchableOpacity>

           <TouchableOpacity >
            <Image source={CardPic} style={styles.cardpic}/>
           </TouchableOpacity>

           <TouchableOpacity >
            <Image source={CardPic} style={styles.cardpic}/>
           </TouchableOpacity>
           </View>
         </ScrollView> 
</ScrollView>
</View>
    </ImageBackground>
   );
};

export default EventScreen;