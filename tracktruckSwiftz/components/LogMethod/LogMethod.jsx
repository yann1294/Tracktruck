import { StyleSheet, Text, View, Pressable, ScrollView, Image, Platform } from 'react-native';
import React, { useContext } from 'react';
import { log_method } from '../../Data/Data';
import ThemeContext from '../../theme/ThemeContext';

const LogMethod = () => {
    const { theme, darkMode } = useContext(ThemeContext);
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.line}></View>
                <Text style={[styles.text]}>Or Continue With</Text>
                <View style={styles.line}></View>
            </View>
            <View style={styles.stack_container}>
                {
                    log_method.map((d) => (
                        <Pressable style={[styles.stack, {backgroundColor:theme.card2}]} key={d.id}>
                          {Platform.OS === 'web'? (<Image style={styles.icon} source={darkMode? d.web_dark_icon : d.web_icon} />) : (darkMode ? d.dark_icon : d.icon)}
                        </Pressable>
                    ))
                }
            </View>
        </View>
    )
}

export default LogMethod;

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
    },
    line: {
        borderBottomWidth: 1,
        borderColor: '#BBBBBB',
        width: '30%',
        paddingTop: 25,
    },
    text: {
        fontSize: 12,
        lineHeight: 14,
        fontFamily: 'Roboto_400Regular',
        color: '#9C9C9C',
        textAlign: 'center',
        marginTop: 25,
    },
    stack_container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 16,
        marginTop: 25,
    },
    stack: {
        borderColor: '#F1F1F1',
        borderRadius: 5,
        backgroundColor: '#F6F6F6',
        width:Platform.OS === 'web'? 85 : 56,
        height:Platform.OS === 'web'? 70 : 44,
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        width: 24,
        height: 24,
    }
})