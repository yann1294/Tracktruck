import { StyleSheet, Text, View, ScrollView, StatusBar, Dimensions, Platform } from 'react-native';
import React, { useContext } from 'react';
import Logo from "../../assets/images/logo.svg";
import ThemeContext from '../../theme/ThemeContext';
import Button from '../../components/Button/Button';
import {router, Link} from "expo-router";
import FillProfileComponent from '../../components/FillProfileComponent/FillProfileComponent';

const FillProfile = () => {
    const { theme, darkMode } = useContext(ThemeContext);

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <StatusBar translucent barStyle={darkMode ? 'light-content' : 'dark-content'} />
            <View style={styles.content}>
                <Logo />
                <Text style={[styles.heading, { color: theme.color }]}>Fill Your Profile</Text>
                <Text style={[styles.head_text, { color: theme.text3 }]}>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                </Text>
            </View>
            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                <FillProfileComponent />
                <View style={styles.button_box}>
                <Button buttonText="save" onPress={() => { router.push('location') }} width="100%" />
            </View>
            </ScrollView>
            
        </View>
    )
}

export default FillProfile;

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingTop:Platform.OS === 'web'? 10 :  50,
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
        marginBottom:Platform.OS === 'web'? 10 :  20, // Added margin to separate from other content
    },
    scrollContent: {
        flexGrow: 1,
        justifyContent: 'center', // Center content vertically when not enough to fill the screen
    },
    button_box: {
        alignItems: 'center',
        marginBottom: height * 0.07, 
        marginTop: 10,
    },
});
