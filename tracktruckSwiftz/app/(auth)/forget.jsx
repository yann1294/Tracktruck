import { StyleSheet, Text, View, ScrollView, StatusBar, Dimensions, Platform } from 'react-native';
import React, { useContext } from 'react';
import Logo from "../../assets/images/logo.svg";
import { PTSerif_700Bold_Italic } from '@expo-google-fonts/pt-serif';
import { Roboto_400Regular } from '@expo-google-fonts/roboto';
import Input from '../../components/Input/Input';
import Mail from "../../assets/images/mail.svg";
import Dark_mail from "../../assets/images/dark_mail.svg";
import ThemeContext from '../../theme/ThemeContext';
import Button from '../../components/Button/Button';
import { router } from "expo-router";

const Forget = () => {
    const { theme, darkMode } = useContext(ThemeContext);
    
    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <StatusBar translucent barStyle={darkMode ? 'light-content' : 'dark-content'} />
            <View style={styles.content}>
                <Logo />
                <Text style={[styles.heading, { color: theme.color }]}>Forgot Password</Text>
                <Text style={[styles.head_text, { color: theme.text3 }]}>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                </Text>
            </View>
            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                <View style={styles.input_container}>
                    <Input placeholder="E-mail" Icon={darkMode ? Dark_mail : Mail} />
                </View>
            </ScrollView>
            <View style={styles.button_box}>
                <Button buttonText="Continue" onPress={() => { router.push('verification') }} width='100%' />
            </View>
        </View>
    );
}

export default Forget;

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingTop: 50,
        paddingHorizontal: 20,
        justifyContent: 'space-between', // Ensures space is distributed between content and button
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
        marginBottom: 20,
    },
    input_container: {
        marginBottom: 20,
    },
    scrollContent: {
        justifyContent: 'center', // Center content when there's not enough to fill the screen
    },
    button_box: {
        marginBottom:Platform.OS === 'web'? '1%' : '15%', // Button is placed 10% from the bottom
        alignItems: 'center',
    },
});
