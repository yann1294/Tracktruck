import { StyleSheet, Text, View, ScrollView, Image, StatusBar } from 'react-native';
import React, { useContext, useState } from 'react';
import Logo from "../../assets/images/logo.svg";
import { PTSerif_700Bold, PTSerif_700Bold_Italic } from '@expo-google-fonts/pt-serif';
import { Roboto_400Regular } from '@expo-google-fonts/roboto';
import Input from '../../components/Input/Input';
import Mail from "../../assets/images/mail.svg";
import Dark_mail from "../../assets/images/dark_mail.svg";
import Lock from "../../assets/images/lock.svg";
import Dark_lock from "../../assets/images/dark_lock.svg";
import Password from '../../components/Password/Password';
import ThemeContext from '../../theme/ThemeContext';
import {router, Link} from 'expo-router';
import Button from '../../components/Button/Button';
import LogMethod from '../../components/LogMethod/LogMethod';

const Signup = () => {
    const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
    const [passwordvisible, setPasswordvisible] = useState(null);
    const [passwordvisible2, setPasswordvisible2] = useState(null);
  return (
    <View style={[styles.container, {backgroundColor:theme.background}]}>
      <StatusBar translucent barStyle={darkMode? 'light-content' : 'dark-content'} />
      <View style={styles.content}>
        <Logo />
        <Text style={[styles.heading, {color:theme.color}]}>SignUp</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={[styles.head_text, {color:theme.text3}]}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</Text>
      <View style={styles.input_container}>
        <Input Icon={darkMode? Dark_mail : Mail} placeholder="E-mail" />
        <Password Icon={darkMode? Dark_lock : Lock} placeholder="Password" passwordVisible={passwordvisible} setPasswordVisible={setPasswordvisible} />
        <Password Icon={darkMode? Dark_lock : Lock} placeholder="Confirm Password" passwordVisible={passwordvisible2} setPasswordVisible={setPasswordvisible2} />
      </View>
     <View style={styles.button_box}>
        <Button buttonText="sign Up" onPress={() => {router.push('fillProfile')}} />
     </View>
     <LogMethod />
      <Text style={[styles.bottom_text, {color:theme.text3}]}>Already have a account? <Link href='/login' style={styles.link} >login</Link></Text>
      </ScrollView>
    </View>
  )
}

export default Signup;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingTop: 50,
        paddingHorizontal: 20,
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
        marginTop: 40,
    },
    bottom_text: {
        textAlign: 'center',
        marginVertical: 50,
        fontSize: 12,
        lineHeight: 24,
        fontFamily: 'Roboto_400Regular',
        color: '#505050',
    },
    link: {
        fontSize: 12,
        lineHeight: 24,
        fontFamily: 'PTSerif_700Bold_Italic',
        color: '#FA6900',
    }
})