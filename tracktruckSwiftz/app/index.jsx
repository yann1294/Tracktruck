import React, { useState, useRef, useEffect, useCallback, useContext } from "react";
import { View, StyleSheet, Dimensions, ScrollView, StatusBar, Animated, Image, BackHandler, SafeAreaView } from "react-native";
import { pages } from "../Data/Data";
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import ThemeContext from "../theme/ThemeContext";
import { Roboto_100Thin, Roboto_300Light, Roboto_400Regular, Roboto_500Medium, Roboto_500Medium_Italic, Roboto_700Bold, Roboto_900Black } from "@expo-google-fonts/roboto";
import { PTSerif_400Regular, PTSerif_700Bold, PTSerif_700Bold_Italic } from "@expo-google-fonts/pt-serif";
import OnboardComponent from "../components/OnboardComponent/OnboardComponent";

const { width, height } = Dimensions.get('window');
SplashScreen.preventAutoHideAsync();

export default function App() {
    const { theme, darkMode } = useContext(ThemeContext);
    const swiperRef = useRef(null);
    const totalPages = pages.length;
    const [activePageIndex, setActivePageIndex] = useState(0);
    const [fontsLoaded] = useFonts({
        Roboto_100Thin,
        Roboto_300Light,
        Roboto_400Regular,
        Roboto_500Medium,
        Roboto_700Bold,
        Roboto_900Black,
        PTSerif_400Regular,
        PTSerif_700Bold,
        PTSerif_700Bold_Italic,
        Roboto_500Medium_Italic,
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    useEffect(() => {
        if (fontsLoaded) {
            
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <SafeAreaView style={[styles.safearea, { backgroundColor: theme.background }]} onLayout={onLayoutRootView}>
            <StatusBar translucent backgroundColor="transparent" barStyle={darkMode ? 'light-content' : 'dark-content'} />
         
            <OnboardComponent
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safearea: {
        flex: 1,
    }
});
