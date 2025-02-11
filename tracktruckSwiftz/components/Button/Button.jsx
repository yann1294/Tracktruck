import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

const Button = ({minWidth, buttonText, onPress, backgroundColor, textColor, borderColor, borderRadius, width, fontsize }) => {
    return (
        <Pressable
            style={[
                styles.button,
                {
                    backgroundColor: backgroundColor || '#060962',
                    borderColor: borderColor || '#060962',
                    borderRadius: borderRadius || 10,
                    width: width || '100%',
                    minWidth: minWidth || 145, 
                },
            ]}
            onPress={onPress}
        >
            <Text style={[styles.buttonText, { color: textColor || '#ffffff', fontSize:fontsize || 18 }]}>
                {buttonText}
            </Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        paddingVertical: 15,
        paddingHorizontal: 10,
        justifyContent: 'center',
        borderWidth: 1,
        minWidth: 145,
    },
    buttonText: {
        textTransform: 'capitalize',
        fontSize: 18,
        lineHeight: 28,
        textAlign: 'center',
        color: '#ffffff',
        fontFamily: 'PTSerif_700Bold',
    },
});

export default Button;
