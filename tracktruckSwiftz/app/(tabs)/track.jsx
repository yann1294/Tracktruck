import { StyleSheet, Text, View, Pressable, ScrollView, TextInput, StatusBar, Platform } from 'react-native';
import React, { useContext } from 'react';
import Back from "../../assets/images/back.svg";
import Dark_back from "../../assets/images/dark_back.svg";
import Tracks from "../../assets/images/track.svg";
import Dark_tracks from "../../assets/images/dark_track.svg";
import ThemeContext from '../../theme/ThemeContext';
import { router } from "expo-router";
import TrackComponent from '../../components/TrackComponent/TrackComponent';

const Track = () => {
  const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.header}>
        <Pressable onPress={() => { router.push('home') }} style={styles.back}>
          {darkMode ? <Dark_back /> : <Back />}
        </Pressable>
        <Text style={[styles.heading, { color: theme.heading }]}>Track Order</Text>
      </View>
      <View style={styles.input_container}>
        <TextInput style={[styles.input, { backgroundColor: theme.card2, color: theme.color }]} placeholderTextColor={darkMode ? '#ffffff' : '#505050'} placeholder='Tracking ID' />
        {darkMode ? <Dark_tracks style={styles.track} /> : <Tracks style={styles.track} />}
        <Pressable style={styles.button}>
          <Text style={styles.button_text}>track</Text>
        </Pressable>
      </View>
      <ScrollView style={styles.scroll_container} showsVerticalScrollIndicator={false}>
        <TrackComponent />
      </ScrollView>
    </View>
  );
};

export default Track;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    marginBottom: 20,
  },
  heading: {
    position: 'absolute',
    left: '45%',
    transform: [{ translateX: -50 }],
    fontSize: 24,
    lineHeight: 34,
    fontFamily: 'PTSerif_700Bold_Italic',
    textAlign: 'center',
  },
  back: {
         borderRadius:Platform.OS === 'web'?  50 : null,
         alignItems:Platform.OS === 'web'?  'center' : null,
         justifyContent:Platform.OS === 'web'?  'center' : null,
         backgroundColor:Platform.OS === 'web'?  'lightgrey' : null,
         width:Platform.OS === 'web'? 30 : null,
         height:Platform.OS === 'web'? 30 : null,
  },
  input_container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  input: {
    borderRadius: 5,
    paddingLeft: 45,
    paddingRight: '16%',
    backgroundColor: '#F6F6F6',
    position: 'relative',
    width: '100%',
    height: 45,
  },
  track: {
    position: 'absolute',
    left: 15,
    bottom: 9,
  },
  button: {
    backgroundColor: '#FA6900',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 0,
    width: '15%',
    height: '98%',
  },
  button_text: {
    fontSize: 12,
    lineHeight: 22,
    fontFamily: 'Roboto_500Medium',
    color: '#ffffff',
    textTransform: 'capitalize',
  },
  scroll_container: {
    flex: 1, // Ensure the ScrollView takes up remaining space
  },
});
