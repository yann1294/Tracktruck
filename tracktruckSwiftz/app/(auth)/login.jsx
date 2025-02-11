import { StyleSheet, Text, View, ScrollView, Image, StatusBar } from 'react-native';
import React, { useContext, useState } from 'react';
import Logo from "../../assets/images/logo.svg";
import Input from '../../components/Input/Input';
import Mail from "../../assets/images/mail.svg";
import Dark_mail from "../../assets/images/dark_mail.svg";
import Dark_Lock from "../../assets/images/dark_lock.svg";
import Lock from "../../assets/images/lock.svg";
import Password from '../../components/Password/Password';
import ThemeContext from '../../theme/ThemeContext';
import {Link} from 'expo-router';
import LoginComponent from '../../components/LoginComponent/LoginComponent';

const Login = () => {
    const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
    const [passwordvisible, setPasswordvisible] = useState(null);
  return (
    <View style={[styles.container, {backgroundColor:theme.background}]}>
      <StatusBar translucent barStyle={darkMode? 'light-content' : 'dark-content'} />
      <View style={styles.content}>
        <Logo />
        <Text style={[styles.heading, {color:theme.color}]}>Login</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={[styles.head_text, {color:theme.text3}]}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</Text>
      <View style={styles.input_container}>
        <Input Icon={darkMode? Dark_mail : Mail} placeholder="E-mail" />
        <Password Icon={darkMode? Dark_Lock : Lock} placeholder="Password" passwordVisible={passwordvisible} setPasswordVisible={setPasswordvisible} />
      </View>
      <LoginComponent />
      <Text style={[styles.bottom_text, {color:theme.text3}]}>Don’t have an account? <Link href='/signup' style={styles.link} >Sign up</Link></Text>
      </ScrollView>
    </View>
  )
}

export default Login;

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