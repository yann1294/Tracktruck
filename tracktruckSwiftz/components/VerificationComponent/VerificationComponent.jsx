import { StyleSheet, Text, View } from 'react-native'
import React, {useState, useEffect, useContext} from 'react'
import Button from '../Button/Button';
import { PTSerif_700Bold } from '@expo-google-fonts/pt-serif';
import { Roboto_400Regular } from '@expo-google-fonts/roboto';
import ThemeContext from '../../theme/ThemeContext';

const VerificationComponent = () => {
    const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
    const [timer, setTimer] = useState(0);
    useEffect(() => {
        let interval = null;

        if (timer < 110) { // 110 seconds = 01:50
            interval = setInterval(() => {
                setTimer(prevTimer => prevTimer + 1);
            }, 1000); // Increment every 1 second
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [timer]);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        if (time < 60) {
            return `0.${seconds.toString().padStart(2, '0')}s`;
        } else {
            return `${minutes.toString().padStart(2, '0')}.${seconds.toString().padStart(2, '0')}m`;
        }
    };
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={[styles.heading, {color:theme.color}]}>Didn’t receive any code?</Text>
        <Text style={[styles.time_head, {color:theme.text3}]}>Request new code in  <Text style={styles.timer}>{formatTime(timer)}</Text></Text>
      </View>
    </View>
  )
}

export default VerificationComponent;

const styles = StyleSheet.create({
    content: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        marginVertical: 30,
    },
    heading: {
        fontSize: 14,
        lineHeight: 19,
        fontFamily: 'PTSerif_700Bold',
    },
    time_head: {
        fontSize: 12,
        lineHeight: 14,
        fontFamily: 'Roboto_400Regular',
        color: '#505050',
    },
    timer: {
        color: '#FA6900',
    }
})