import { StyleSheet, Text, View, Image, ScrollView, KeyboardAvoidingView, Platform, StatusBar, Pressable } from 'react-native';
import React, { useContext } from 'react';
import Map from "../../assets/images/map2.png";
import Back from "../../assets/images/back.svg";
import { router, Link } from "expo-router";
import Locate from "../../assets/images/locate.svg";
import Pick from "../../assets/images/pick_location.svg";
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { PTSerif_700Bold_Italic } from '@expo-google-fonts/pt-serif';
import ThemeContext from '../../theme/ThemeContext';

const Drop = () => {
    const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <StatusBar translucent barStyle='dark-content' />
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <Image source={Map} alt='image' style={styles.image} />
                <Pressable style={styles.back} onPress={() => { router.push('(screens)/placeOrder') }}>
                    <Back />
                </Pressable>
                <Locate style={styles.locate} />
                <View style={styles.main_input_container}>
                <View style={[styles.input_container, { backgroundColor: theme.background2 }]}>
                    <Text style={[styles.heading, { color: theme.heading }]}>Drop Address</Text>
                    <Input Icon={Pick} placeholder="No 2, Balonny Close, Allen Avenue" />
                    <Button buttonText="Package Drop" onPress={() => { router.push('(screens)/placeOrder') }} />
                </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default Drop;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        position: 'relative',
        position: 'relative',
        width: '100%',
        flex: 1,
    },
    back: {
        position: 'absolute',
        top: 50,
        left: 20,
    },
    locate: {
        position: 'absolute',
        left: '45%',
        top: '45%',
    },
    main_input_container: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input_container: {
        borderRadius: 10,
        paddingVertical: 16,
        paddingHorizontal: 25,
        backgroundColor: '#ffffff',
        position: 'absolute',
        bottom: 100,
        marginHorizontal: 20,
        gap: 13,
    },
    heading: {
        fontSize: 18,
        lineHeight: 23,
        fontFamily: 'PTSerif_700Bold_Italic',
        textAlign: 'center',
    }
})
