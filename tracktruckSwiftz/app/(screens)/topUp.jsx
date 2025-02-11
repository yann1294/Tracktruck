import { StyleSheet, Text, View, Pressable, ScrollView, Dimensions } from 'react-native';
import React, { useContext } from 'react';
import Back from "../../assets/images/back.svg";
import Dark_back from "../../assets/images/dark_back.svg";
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { router } from "expo-router";
import ThemeContext from '../../theme/ThemeContext';

const { width, height } = Dimensions.get('window');

const TopUp = () => {
    const { theme, darkMode } = useContext(ThemeContext);
    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <View style={styles.header}>
                <Pressable onPress={() => router.push('wallet')} style={styles.back}>
                    {darkMode ? <Dark_back  /> : <Back  />}
                </Pressable>
                <Text style={[styles.heading, { color: theme.heading }]}>Make Payment</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.price}>€1052,84</Text>
                <Text style={[styles.available, { color: theme.color }]}>Available Balance</Text>
            </View>
            <Input label="Topup Wallet" placeholder="$ 0" keyboardType="number-pad" />
            <View style={styles.button_box}>
                <Button buttonText="Proceed to Topup" onPress={() => {router.push('wallet')}} />
            </View>
        </View>
    );
}

export default TopUp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: height * 0.05, 
        paddingHorizontal: width * 0.05, 
        backgroundColor: 'white', 
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        marginBottom: 20,
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
    content: {
        alignItems: 'center',
        marginVertical: height * 0.03, 
    },
    price: {
        fontSize: width * 0.06, 
        lineHeight: width * 0.07, 
        fontFamily: 'Roboto_700Bold',
        color: '#FA6900',
        paddingTop: height * 0.01, 
        textAlign: 'center',
    },
    available: {
        fontSize: width * 0.04, 
        lineHeight: width * 0.05, 
        fontFamily: 'Roboto_400Regular',
        color: '#000000',
        paddingTop: height * 0.005, 
    },
    button_box: {
        flex: 1,
        justifyContent: 'flex-end', 
        marginBottom: height * 0.05, 
    }
});
