import { StyleSheet, Text, View, Pressable, Platform } from 'react-native';
import React, { useContext, useState } from 'react';
import { tab_data2, track_data } from '../../Data/Data';
import {router} from 'expo-router';
import ThemeContext from '../../theme/ThemeContext';

const TrackComponent = () => {
    const { theme } = useContext(ThemeContext);
    const [active_tab, setActive_tab] = useState(tab_data2[0].id);
    const press = (id) => {
        setActive_tab(id);
    };
    return (
        <View style={styles.container}>
              <View style={styles.container}>
            <View style={styles.tab_container}>
                {
                    tab_data2.map((d) => (
                        <Pressable style={[styles.tab, active_tab === d.id && [styles.active_tab, { borderBottomColor: theme.heading }]]} key={d.id} onPress={() => { press(d.id) }}>
                            <Text style={[[styles.tab_text, { color: theme.text3 }], active_tab === d.id && [styles.active_tab_text, { color: theme.heading }]]}>{d.text}</Text>
                        </Pressable>
                    ))
                }
            </View>
        </View>
            <View style={styles.stack_container}>
                {track_data.map((d) => (
                    <View style={[styles.stack, {backgroundColor:theme.card2}]} key={d.id}>
                        <View style={styles.left}>
                            <Text style={[styles.date, {color:theme.color}]}>{d.date}</Text>
                            <View style={styles.row}>
                                <Text style={[styles.heading, {color:theme.text3}]}>Tracking Number :</Text>
                                <Text style={[styles.no, {color:theme.color}]}>{d.track_no}</Text>
                            </View>
                            <View style={styles.row2}>
                                <Text style={[styles.heading, {color:theme.text3}]}>Package Items :</Text>
                                <Text style={[styles.items, {color:theme.color}]}>{d.item}</Text>
                            </View>
                            <View style={styles.row2}>
                                <Text style={[styles.heading, {color:theme.text3}]}>Weight of Items :</Text>
                                <Text style={[styles.items, {color:theme.color}]}>{d.weight}</Text>
                            </View>
                            <Pressable style={[styles.button2, d.status !== 'On-going' && styles.rightbg]} onPress={() => {router.push('(screens)/orderDetails')}}>
                                <Text style={styles.button_text}>View</Text>
                            </Pressable>
                        </View>
                        <View style={[styles.right, d.status === 'On-going' && styles.rightbg]}>
                            <Text style={styles.status}>{d.status}</Text>
                        </View>
                    </View>
                ))}
            </View>
        </View>
    );
};

export default TrackComponent;

const styles = StyleSheet.create({
    tab_container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 0,
        width: '100%',
    },
    tab: {
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: '#A8A8A8',
        borderBottomWidth: 2,
        width:Platform.OS === 'web'? '32%' : 115,
        height: 50,
    },
    active_tab: {
        borderBottomColor: '#060962',
    },
    tab_text: {
        fontSize: 14,
        lineHeight: 16,
        fontFamily: 'Roboto_500Medium',
        textAlign: 'center',
        color: '#505050',
    },
    active_tab_text: {
        color: '#060962',
    },
    stack_container: {
        gap: 20,
        marginVertical: 30,
    },
    stack: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 10,
        backgroundColor: '#f6f6f6',
        maxHeight: 200,
    },
    button2: {
        borderRadius: 5,
        backgroundColor: '#060962',
        width: 81,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 26,
    },
    button_text: {
        fontSize: 14,
        lineHeight: 16,
        fontFamily: 'Roboto_500Medium',
        color: '#FFFFFF',
        textTransform: 'capitalize',
    },
    left: {
        width: '80%',
        height: 180,
        paddingVertical: 20,
        paddingLeft: 20,
    },
    date: {
        fontSize: 14,
        lineHeight: 16,
        fontFamily: 'Roboto_700Bold',
    },
    heading: {
        fontSize: 14,
        lineHeight: 16,
        fontFamily: 'Roboto_400Regular',
        color: '#505050',
    },
    no: {
        fontSize: 12,
        lineHeight: 26,
        fontFamily: 'Roboto_500Medium',
    },
    items: {
        fontSize: 12,
        lineHeight: 16,
        fontFamily: 'Roboto_400Regular',
        textAlign: 'right',
        maxWidth: 120,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    row2: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        width: '103%',
    },
    right: {
        width: '15%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#060962',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        height: 200,
    },
    rightbg: {
        backgroundColor: '#FA6900',
    },
    status: {
        lineHeight: 12,
        fontFamily: 'Roboto_700Bold',
        color: '#ffffff',
        fontSize: 14,
        width: '150%',
        paddingTop: 5,
        textAlign: 'center',
        transform: [{ rotate: '270deg' }],
    },
});
