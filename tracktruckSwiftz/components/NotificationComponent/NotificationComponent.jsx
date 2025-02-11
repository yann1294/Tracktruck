import { StyleSheet, Text, View, Pressable } from 'react-native';
import React, { useContext } from 'react';
import { tab_data3 } from '../../Data/Data';
import ThemeContext from '../../theme/ThemeContext';

const NotificationComponent = () => {
    const { theme } = useContext(ThemeContext);
  return (
    <View style={styles.container}>
        <View style={styles.tab_container}>
            {
                tab_data3.map((d) => (
                    <Pressable style={[styles.tab, {backgroundColor:theme.card2, borderLeftColor: theme.heading}]} key={d.id}>
                        <View style={styles.left}>
                            <View style={[styles.image_box, {backgroundColor:theme.heading}]}>
                            {d.icon}
                            </View>
                            <View style={styles.content}>
                                <Text style={[styles.heading, {color:theme.color}]}>{d.heading}</Text>
                                <Text style={[styles.text, {color:theme.text3}]}>{d.text}</Text>
                            </View>
                        </View>
                        <Text style={[styles.time, {color:theme.text3}]}>{d.time}</Text>
                    </Pressable>
                ))
            }
        </View>
    </View>
  )
}

export default NotificationComponent;

const styles = StyleSheet.create({
    tab_container: {
        gap: 20,
    },
    tab: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,
        borderRadius: 10,
        backgroundColor: '#f6f6f6',
        borderLeftWidth: 10,
        borderLeftColor: '#060962',
    },
    left: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    image_box: {
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#060962',
        borderRadius: 5,
    },
    content: {
        gap: 5,
    },
    heading: {
        fontSize: 14,
        lineHeight: 18,
        fontFamily: 'PTSerif_700Bold_Italic',
    },
    text: {
        fontSize: 12,
        lineHeight: 14,
        fontFamily: 'Roboto_400Regular',
        color: '#505050',
        maxWidth: 180,
    },
    time: {
        fontSize: 10,
        lineHeight: 11,
        fontFamily: "Roboto_500Medium",
        color: '#505050',
    }
})