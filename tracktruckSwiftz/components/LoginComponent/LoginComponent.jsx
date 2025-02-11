import { StyleSheet, Text, View, Pressable, ScrollView, Image, Switch } from 'react-native';
import React, { useContext, useState } from 'react';
import ThemeContext from '../../theme/ThemeContext';
import {router, Link} from "expo-router";
import LogMethod from '../LogMethod/LogMethod';
import Button from '../Button/Button';

const LoginComponent = () => {
    const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.switch_row}>
            <Switch
                    trackColor={{ false: "#767577", true: "#FA6900" }}
                    thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
                    value={isEnabled} 
                    onValueChange={toggleSwitch} 
                    style={styles.switch}
                />
                <Text style={[styles.switch_text, {color:theme.color}]}>Remember Me</Text>
                </View>
                <Pressable>
                    <Link href="/forget" style={[styles.forget]}>Forgot password?</Link>
                </Pressable>
            </View>
            <View>
        <View style={styles.button_box}>
      <Button buttonText="Login" onPress={() => {router.push('home')}}/>
      </View>
      <LogMethod />
    </View>
        </View>
    )
}

export default LoginComponent;

const styles = StyleSheet.create({
    container: {

    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    switch_row: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    forget: {
        color: '#FA6900',
        fontSize: 12,
        lineHeight: 14,
        fontFamily: 'Roboto_400Regular',
    },
    button_box: {
        marginVertical: 30,
    }

})