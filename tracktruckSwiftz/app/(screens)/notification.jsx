import { StyleSheet, Text, View, Image, ScrollView, Pressable, StatusBar, Platform } from 'react-native';
import React, { useContext } from 'react';
import {router, Link} from 'expo-router';
import Back from "../../assets/images/back.svg";
import Dark_back from "../../assets/images/dark_back.svg";
import ThemeContext from '../../theme/ThemeContext';
import NotificationComponent from '../../components/NotificationComponent/NotificationComponent';

const Notification = () => {
  const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <View style={[styles.container, {backgroundColor:theme.background}]}>
      <StatusBar barStyle={darkMode? 'light-content' : 'dark-content'} />
      <View style={styles.header}>
        <Pressable onPress={() => {router.push('home')}} style={styles.back}>
       {darkMode? <Dark_back /> : <Back />}
        </Pressable>
        <Text style={[styles.heading, {color:theme.heading}]}>Notification</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Mark all as read</Text>
        <Text style={styles.text}>Clear All </Text>
      </View>
      <NotificationComponent />
    </View>
  )
}

export default Notification;

const styles = StyleSheet.create({
    container: {
      flex: 1,
        paddingTop: 50,
        paddingHorizontal: 20,
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
      width:Platform.OS === 'web'? 30 : '10%',
      height:Platform.OS === 'web'? 30 : '50%',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical:30,
    },
    text: {
        fontSize: 14,
        lineHeight: 16,
        fontFamily: 'Roboto_500Medium',
        color: '#FA6900',
    }
})