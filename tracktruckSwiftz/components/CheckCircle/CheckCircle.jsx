import React, { useContext } from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import ThemeContext from '../../theme/ThemeContext';

const CheckCircle = ({ size = 18, color = '#FA6900', checked, onPress }) => {
    const innerCircleSize = size - 8; 
    const { theme, toggleTheme, darkMode } = useContext(ThemeContext);
    return (
        <Pressable onPress={onPress}>
            <View style={[styles.outerCircle, { width: size, height: size, borderColor: color }]}>
                {checked && <View style={[styles.innerCircle, { width: innerCircleSize, height: innerCircleSize, backgroundColor: color }]} />}
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    outerCircle: {
        borderRadius: 50,
        borderWidth: 1.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    innerCircle: {
        borderRadius: 50,
    },
});

export default CheckCircle;
