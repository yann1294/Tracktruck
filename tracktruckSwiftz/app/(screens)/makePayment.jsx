import { StyleSheet, Text, View, StatusBar, Dimensions, ScrollView, Pressable, Platform } from 'react-native';
import React, { useContext, useState } from 'react';
import { router } from "expo-router";
import Back from "../../assets/images/back.svg";
import Dark_back from "../../assets/images/dark_back.svg";
import { pay_method } from '../../Data/Data';
import Button from '../../components/Button/Button';
import ThemeContext from '../../theme/ThemeContext';
import CheckCircle from '../../components/CheckCircle/CheckCircle';

const MakePayment = () => {
    const [checkedStates, setCheckedStates] = useState([true, ...Array(pay_method.length - 1).fill(false)]);
    const { theme, darkMode } = useContext(ThemeContext);
    const handlePress = (index) => {
        setCheckedStates(prevStates => prevStates.map((state, idx) => idx === index));
    };

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
            <View style={styles.header}>
                <Pressable onPress={() => { router.push('(screens)/orderPayment') }} style={styles.back}>
                    {darkMode ? <Dark_back /> : <Back />}
                </Pressable>
                <Text style={[styles.heading, { color: theme.heading }]}>Make Payment</Text>
            </View>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.stack_container}>
                    {
                        pay_method.map((d, index) => (
                            <Pressable style={[styles.stack, { backgroundColor: theme.card2 }]} key={d.id} onPress={() => handlePress(index)}>
                                <View style={styles.left}>
                                    {d.icon}
                                    <Text style={[styles.stack_text, { color: theme.text4 }]}>{d.text}</Text>
                                </View>
                                <CheckCircle checked={checkedStates[index]} onPress={() => handlePress(index)} />
                            </Pressable>
                        ))
                    }
                </View>
            </ScrollView>
            <View style={styles.button_box}>
                <Button buttonText="Next" onPress={() => { router.push('(screens)/orderConfirmation') }} />
            </View>
        </View>
    )
}

export default MakePayment;

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 20,
        backgroundColor: '#ffffff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        marginBottom: 30,
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
    },
    stack_container: {
        flexGrow: 1,
        marginBottom: 20, // Ensure spacing above the button container
    },
    stack: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 10,
        backgroundColor: '#f6f6f6',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginBottom: 16, // Space between items
    },
    left: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    stack_text: {
        fontSize: 14,
        lineHeight: 16,
        fontFamily: 'Roboto_400Regular',
        color: '#39335E',
        marginLeft: 12,
    },
    scrollContent: {
        flexGrow: 1,
    },
    button_box: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom:Platform.OS === 'web'? 10 : height * 0.10,
    }
});
