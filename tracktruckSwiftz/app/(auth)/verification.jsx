import { StyleSheet, Text, View, ScrollView, StatusBar, Dimensions, Platform } from 'react-native';
import React, { useContext } from 'react';
import Logo from "../../assets/images/logo.svg";
import ThemeContext from '../../theme/ThemeContext';
import Button from '../../components/Button/Button';
import Otp from '../../components/OTP/Otp';
import { router } from "expo-router";
import VerificationComponent from '../../components/VerificationComponent/VerificationComponent';

const { height } = Dimensions.get('window');

const Verification = () => {
    const { theme, darkMode } = useContext(ThemeContext);

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <StatusBar translucent barStyle={darkMode ? 'light-content' : 'dark-content'} />
            <View style={styles.content}>
                <Logo />
            </View>
                <Text style={[styles.heading, { color: theme.color }]}>Verification OTP</Text>
            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                <View style={styles.content_box}>
                    <Text style={[styles.head_text, { color: theme.text3 }]} >
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                    </Text>
                    <View style={styles.input_container}>
                        <Otp />
                    </View>
                    <VerificationComponent />
                </View>
            </ScrollView>
            <View style={styles.button_box}>
                <Button buttonText="Verify" onPress={() => { router.push('resetPassword') }} width="100%" />
            </View>
        </View>
    );
}

export default Verification;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 20,
        backgroundColor: '#ffffff',
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
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
        marginBottom: 20,
    },
    input_container: {
        marginTop: 0,
        gap: 20,
    },
    scrollContent: {
        flexGrow: 1,
        justifyContent: 'center', // Centers content vertically within ScrollView
        paddingBottom: height * 0.15, // Ensure space at the bottom for button
    },
    button_box: {
        alignItems: 'center',
        marginBottom:Platform.OS === 'web'? '1%' :  '15%',
    },
    content_box: {
        flexGrow: 1,
        justifyContent: 'center', // Centers the content vertically
        paddingBottom: height * 0.15, // Ensures space for button and avoids overlap
    },
});
