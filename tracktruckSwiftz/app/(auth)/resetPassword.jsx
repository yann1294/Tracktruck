import { StyleSheet, Text, View, ScrollView, Image, StatusBar, Platform } from 'react-native';
import React, { useContext, useState } from 'react';
import Logo from "../../assets/images/logo.svg";
import { PTSerif_700Bold, PTSerif_700Bold_Italic } from '@expo-google-fonts/pt-serif';
import { Roboto_400Regular } from '@expo-google-fonts/roboto';
import Lock from '../../assets/images/lock.svg';
import Dark_lock from "../../assets/images/dark_lock.svg";
import ThemeContext from '../../theme/ThemeContext';
import Button from '../../components/Button/Button';
import Password from '../../components/Password/Password';
import {router, Link} from "expo-router";

const Reset_password = () => {
    const { theme, darkMode } = useContext(ThemeContext);
    const [passwordvisible3, setPasswordvisible3] = useState(null);
    const [passwordvisible4, setPasswordvisible4] = useState(null);
  return (
    <View style={[styles.container, {backgroundColor:theme.background}]}>
      <StatusBar translucent barStyle={darkMode? 'light-content' : 'dark-content'} />
      <View style={styles.content}>
        <Logo />
        <Text style={[styles.heading, {color:theme.color}]}>Reset Password</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={[styles.head_text, {color:theme.text3}]}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</Text>
      <View style={styles.input_container}>
        <Password Icon={darkMode? Dark_lock : Lock} placeholder='Password' passwordVisible={passwordvisible3} setPasswordVisible={setPasswordvisible3} />
        <Password Icon={darkMode? Dark_lock : Lock} placeholder='Re-Enter Password' passwordVisible={passwordvisible4} setPasswordVisible={setPasswordvisible4} />
     </View>
    </ScrollView>
    <View style={styles.button_box}>
        <Button buttonText="reset password" onPress={() => {router.push('login')}}/>
     </View>
    </View>
  )
}

export default Reset_password;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingTop: 50,
        paddingHorizontal: 20,
        justifyContent: 'space-between',
    },
    content: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    heading: {
        fontSize: 34,
        lineHeight: 44,
        fontFamily: 'PTSerif_700Bold_Italic',
        marginVertical: 16,
        textTransform: 'capitalize',
        textAlign: 'center',
    },
    head_text: {
        fontSize: 13.6,
        lineHeight: 24,
        fontFamily: 'Roboto_400Regular',
        color: '#505050',
        textAlign: 'center',
    },
    input_container: {
        marginTop: 20,
        gap: 20,
    },
    button_box: {
        marginBottom:Platform.OS === 'web'? '1%' :  '15%',
    },
})