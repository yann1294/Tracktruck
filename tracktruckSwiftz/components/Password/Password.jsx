import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native';
import React, { useContext } from 'react';
import Open from "../../assets/images/eye-open.svg";
import Dark_open from "../../assets/images/dark_eye_open.svg";
import Close from "../../assets/images/eye-close.svg";
import Dark_close from "../../assets/images/dark_eye_close.svg";
import ThemeContext from '../../theme/ThemeContext';

const Password = ({ label, passwordVisible, setPasswordVisible, placeholder, keyboardType, Icon }) => {
    const { theme, darkMode } = useContext(ThemeContext);
    const placeholderColor = darkMode ? '#f6f6f6' : '#505050';
    const togglePasswordVisible = () => {
        setPasswordVisible(!passwordVisible);
    };
    return (
        <View style={styles.inputBox}>
            {label && <Text style={[styles.label, { color: theme.color }]}>{label}</Text>}
            <View style={styles.inputWrapper}>
                {Icon && <Icon style={styles.icon} />}
                <TextInput
                    style={[styles.passwordInput, { color: theme.color, backgroundColor: theme.card2, borderColor: 'rgba(255, 255, 255, 0.08)' }]}
                    placeholderTextColor={placeholderColor}
                    placeholder={placeholder}
                    secureTextEntry={!passwordVisible}
                    keyboardType={keyboardType}
                />
                <Pressable style={styles.box}>
                    <Pressable style={styles.eye} onPress={togglePasswordVisible}>
                        {passwordVisible ? (darkMode ? <Dark_open /> : <Open />) : (darkMode ? <Dark_close /> : <Close />)}
                    </Pressable>
                </Pressable>
            </View>
        </View>
    );
};

export default Password;

const styles = StyleSheet.create({
    inputBox: {
        gap: 10,
    },
    label: {
        fontSize: 14,
        lineHeight: 24,
        fontFamily: 'PTSerif_700Bold',
        color: '#121212',
        textTransform: 'capitalize',
    },
    inputWrapper: {

    },
    passwordInput: {
        paddingVertical: 12,
        paddingHorizontal: 20,
        paddingLeft: 40,
        paddingRight: 45,
        borderRadius: 6,
        backgroundColor: '#f6f6f6',
        borderColor: 'transparent',
        borderWidth: 1,
        position: 'relative',
    },
    box: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        height: '100%',
        width: '17%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    eye: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
    },
    icon: {
        position: 'absolute',
        left: 10,
        bottom: 13,
        zIndex: 100,
        pointerEvents: 'none',
    },
});
