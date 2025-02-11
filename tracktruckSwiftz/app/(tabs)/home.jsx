import { StyleSheet, Text, View, Image, ScrollView, Pressable, TextInput, StatusBar, Platform } from 'react-native';
import React, { useContext } from 'react';
import Notification from "../../assets/images/notification.svg";
import Dark_notification from "../../assets/images/dark_notification.svg";
import Tracks from "../../assets/images/track.svg";
import Dark_tracks from "../../assets/images/dark_track.svg";
import { router } from "expo-router";
import ThemeContext from '../../theme/ThemeContext';
import HomeComponent from '../../components/HomeComponent/HomeComponent';

const Home = () => {
    const { theme, darkMode } = useContext(ThemeContext);
    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
            <View style={styles.header}>
                <View style={styles.left}>
                    <Text style={[styles.heading, { color: theme.heading }]}>Welcome! 👋🏻</Text>
                    <Text style={[styles.name, { color: theme.color }]}>Brooklyn Simmons</Text>
                </View>
                {darkMode ? <Dark_notification onPress={() => { router.push('(screens)/notification') }} /> : <Notification onPress={() => { router.push('(screens)/notification') }} />}
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.input_container}>
                    <TextInput style={[styles.input, { backgroundColor: theme.card2, color: theme.color }]} placeholderTextColor={darkMode ? '#ffffff' : '#505050'} placeholder='Tracking ID' />
                    {darkMode ? <Dark_tracks style={styles.track} /> : <Tracks style={styles.track} />}
                    <Pressable style={styles.button}>
                        <Text style={styles.button_text}>track</Text>
                    </Pressable>
                </View>
                <HomeComponent />
            </ScrollView>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: Platform.OS === 'web'? 10 : 0,
    },
    heading: {
        fontSize: 24,
        lineHeight: 34,
        fontFamily: 'PTSerif_700Bold_Italic',
    },
    name: {
        fontSize: 18,
        lineHeight: 21,
        fontFamily: 'Roboto_500Medium',
    },
    input_container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
    },
    input: {
        borderRadius: 5,
        height: 45,
        paddingLeft: 45,
        paddingRight: '18%',
        backgroundColor: '#F6F6F6',
        position: 'relative',
        width: '100%',
    },
    track: {
        position: 'absolute',
        left: 15,
        bottom: 12,
    },
    button: {
        backgroundColor: '#FA6900',
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 0,
        width: '17%',
        height: '100%',
    },
    button_text: {
        fontSize: 12,
        lineHeight: 22,
        fontFamily: 'Roboto_500Medium',
        color: '#ffffff',
        textTransform: 'capitalize',
    }
})