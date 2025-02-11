import { StyleSheet, Text, View, TextInput, Pressable, Keyboard } from 'react-native';
import React, { useContext, useRef, useState } from 'react';
import ThemeContext from '../../theme/ThemeContext';

const Otp = () => {
    const { theme,  darkMode } = useContext(ThemeContext);
    const otpInputs = useRef([]);
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const handleOtpChange = (index, value) => {
        if (isNaN(value)) return;
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
        if (value !== '' && index < otp.length - 1) {
            otpInputs.current[index + 1].focus();
        } else if (index === otp.length - 1 && value !== '') {
            Keyboard.dismiss();
        }
    };
    const handleBackspace = (index, event) => {
        if (event.nativeEvent.key === 'Backspace') {
            const newOtp = [...otp];
            if (otp[index] !== '') {
                newOtp[index] = '';
                setOtp(newOtp);
                return;
            }
            if (index > 0) {
                newOtp[index - 1] = '';
                setOtp(newOtp);
                otpInputs.current[index - 1].focus();
            }
        }
    };

  return (
    <View>
        <View style={styles.otp_block}>
                    {otp.map((digit, index) => (
                        <TextInput
                            key={index}
                            style={[styles.input, {color: theme.color, backgroundColor:theme.card2}]}
                            maxLength={1}
                            keyboardType="numeric"
                            onChangeText={(value) => handleOtpChange(index, value)}
                            onKeyPress={(event) => handleBackspace(index, event)}
                            value={digit}
                            ref={(ref) => otpInputs.current[index] = ref}
                        />
                    ))}
                </View>
    </View>
  )
}

export default Otp;

const styles = StyleSheet.create({
    otp_block: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10,
        marginTop: 30,
    },
    input: {
        width: 45,
        height: 45,
        textAlign: 'center',
        fontSize: 24,
        lineHeight: 30,
        color: '#000000',
        fontWeight: '700',
        borderRadius: 5,
        backgroundColor:'#F6F6F6',
    },
})