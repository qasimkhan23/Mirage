import React from "react";
import {
   Image,
   ImageBackground,
   Text,
   TouchableOpacity,
   View
} from "react-native";
import {
   ShopBackground,
   Track2
} from "../../../assets";
import AudioFile from "../../../assets/Ishq.mp3";
import Song1 from '../../../assets/song1.mp3'
import Song2 from '../../../assets/song2.mp3'
import Song3 from '../../../assets/song3.mp3'
import Song4 from '../../../assets/song4.mp3'
import Song5 from '../../../assets/song5.mp3'
import AudioSlider from "../../components/AudioSlider/AudioSlider";
import Footer from "../../components/Footer/Footer";
import styles from "./styles";

const PlayerScreen = ({ route,navigation }) => {
   const AudioTracks = [Song1,Song2,Song3,Song4,Song5]
  const { index } = route.params;

   console.log('index',index)
   return (
      <ImageBackground source={ShopBackground} style={[styles.container]}>
         <View style={styles.bodyContainer}>
            <TouchableOpacity>
               <Image source={Track2} style={styles.image2} />
               <View style={styles.textTrack}>
                  <Text style={styles.title}>Bohemian Rhapsody</Text>
                  <Text style={styles.singerName}>Queen</Text>
                  <Text style={styles.by}>
                     By <Text style={styles.changeColor}>AlanEth</Text>
                  </Text>
               </View>
            </TouchableOpacity>
         </View>
         <View
            style={{
               backgroundColor: "#2d0c2b",
               position: "absolute",
               bottom: 30,
               right: 5,
               left: 5,
               borderRadius:10,
               marginBottom:100
            }}
         >
            <AudioSlider audio={AudioTracks[index]} />
         </View>
          <Footer />
      </ImageBackground>
   );
};

export default PlayerScreen;
