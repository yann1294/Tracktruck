import { StyleSheet, Text, View, Image, Pressable, ScrollView, Switch, Modal, StatusBar } from 'react-native';
import React, { useContext, useState } from 'react';
import Back from "../../assets/images/back.svg";
import Dark_back from "../../assets/images/dark_back.svg";
import ThemeContext from '../../theme/ThemeContext';
import { router } from "expo-router";
import ProfileComponent from '../../components/ProfileComponent/ProfileComponent';

const Profile = () => {
  const { theme, darkMode } = useContext(ThemeContext);
  const back = () => {
    router.push('home');
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <StatusBar translucent barStyle={darkMode? 'light-content' : 'dark-content'} />
      <View style={styles.header}>
        <Pressable onPress={back} style={styles.back}>
          {darkMode? <Dark_back /> : <Back />}
        </Pressable>
        <Text style={[styles.heading, { color: theme.heading }]}>Profile</Text>
      </View>
      <ProfileComponent />
    </View>
  )
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    marginBottom: 20,
  },
  heading: {
    position: 'absolute',
    left: '53%',
    transform: [{ translateX: -50 }],
    fontSize: 24,
    lineHeight: 34,
    fontFamily: 'PTSerif_700Bold_Italic',
    textAlign: 'center',
  },
  back: {
  },
});
