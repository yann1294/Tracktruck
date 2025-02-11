import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React, { useContext } from 'react';
import { stack_data2, stack_data3 } from '../../Data/Data';
import Dp from "../../assets/images/dp.png";
import Share from "../../assets/images/share.svg";
import Dark_share from "../../assets/images/dark_share.svg";
import Button from '../Button/Button';
import ThemeContext from '../../theme/ThemeContext';
import Line from "../../assets/images/line.png";

const OrderDetailsComponent = () => {
    const { theme, darkMode } = useContext(ThemeContext);
    
    return (
        <View style={styles.container}>
            <View style={[styles.stack, {backgroundColor: theme.card2}]}>
                <View style={styles.row}>
                    <Text style={[styles.heading, {color: theme.color}]}>Tracking Number :</Text>
                    <Text style={[styles.number, {color: theme.heading3}]}>R-7458-4567-4434-5854</Text>
                </View>
                <View style={styles.row_container}>
                    {stack_data2.map((d) => (
                        <View style={styles.row2} key={d.id}>
                            <Text style={[styles.heading2, {color: theme.text3}]}>{d.heading}</Text>
                            <Text style={[styles.value, {color: theme.color}]}>{d.value}</Text>
                        </View>
                    ))}
                </View>
            </View>

            <View style={[styles.stack2, {backgroundColor: theme.card2}]}>
                <Image source={Dp} style={styles.dp} alt='image' />
                <View style={styles.right}>
                    <View style={styles.right_top}>
                        <View style={styles.content}>
                            <Text style={[styles.name, {color: theme.color}]}>Mr. Albert</Text>
                            <Text style={[styles.role, {color: theme.color}]}>Truck Manager</Text>
                        </View>
                        {darkMode ? <Dark_share /> : <Share />}
                    </View>
                    <View style={styles.button_container}>
                        <Button buttonText="Call" width='48%' minWidth="48%" />
                        <Button buttonText="Chat" width='48%' minWidth="48%" />
                    </View>
                </View>
            </View>

            <View style={[styles.stack3, { backgroundColor: theme.card2 }]}>
                <Text style={[styles.heading3, { color: theme.color }]}>Package Status</Text>
                <View style={styles.row_container3}>
                    {stack_data3.map((d, index) => {
                        const isDelivery = d.heading === "Package delivered";
                        return (
                            <View key={d.id}>
                                <View style={styles.row3}>
                                    <View style={styles.iconColumn3}>
                                        {d.icon}
                                        {index < stack_data3.length - 1 && (
                                            <Image source={Line} alt='line' style={styles.line3} />
                                        )}
                                    </View>
                                    <View style={styles.column3}>
                                        <Text style={[styles.heading4, d.isActive ? styles.head_color3 : { color: theme.color }]}>{d.heading}</Text>
                                        <View style={styles.text_row3}>
                                            <Text style={[styles.time3, isDelivery && styles.deliveryColor3]}>{d.date}</Text>
                                            <Text style={[styles.time4, isDelivery && styles.deliveryColor3]}>{d.time}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        );
                    })}
                </View>
            </View>
        </View>
    );
};

export default OrderDetailsComponent;

const styles = StyleSheet.create({
    container: {
        
    },
    stack: {
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#f6f6f6',
        marginBottom: 20,
    },
    row_container: {
        gap: 18,
        marginVertical: 20,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: '100%',
    },
    row2: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        maxWidth: '100%',
    },
    heading: {
        fontSize: 16,
        lineHeight: 16,
        fontFamily: 'Roboto_500Medium',
    },
    number: {
        fontSize: 14,
        lineHeight: 20,
        fontFamily: 'Roboto_400Regular',
        color: '#0560FA',
    },
    heading2: {
        fontSize: 14,
        lineHeight: 16,
        fontFamily: 'Roboto_400Regular',
        color: '#505050',
    },
    value: {
        textAlign: 'right',
        maxWidth: 120,
        fontSize: 12,
        lineHeight: 16,
        fontFamily: 'Roboto_400Regular',
    },
    stack2: {
        flexDirection: 'row',
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#f6f6f6',
        gap: 16,
        marginBottom: 20,
    },
    right: {
        gap: 16,
        paddingRight: 10,
        width: '78%',
    },
    right_top: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 0,
    },
    dp: {
        width: 60,
        height: 60,
        borderRadius: 50,
    },
    name: {
        fontSize: 16,
        lineHeight: 16,
        fontFamily: 'Roboto_700Bold',
    },
    role: {
        fontSize: 12,
        lineHeight: 16,
        fontFamily: 'Roboto_700Bold',
    },
    button_container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    stack3: {
        borderRadius: 10,
        padding: 20,
        backgroundColor: '#f6f6f6',
    },
    heading3: {
        fontSize: 18,
        lineHeight: 22,
        fontFamily: 'Roboto_700Bold',
        textTransform: 'capitalize',
    },
    row_container3: {
        marginVertical: 20,
    },
    row3: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    iconColumn3: {
        alignItems: 'center',
    },
    column3: {
        marginLeft: 10,
        marginTop: -3,
    },
    heading4: {
        fontSize: 14,
        lineHeight: 16,
        fontFamily: 'Roboto_400Regular',
    },
    head_color3: {
        color: '#0560FA',
    },
    text_row3: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    time3: {
        fontSize: 12,
        lineHeight: 16,
        fontFamily: 'Roboto_400Regular',
        color: '#FA6900',
    },
    time4: {
        fontSize: 12,
        lineHeight: 16,
        fontFamily: 'Roboto_400Regular',
        color: '#FA6900',
    },
    deliveryColor3: {
        color: '#808080',
    },
    line3: {
        height: 30,
        width: 2,
        marginVertical: 0,
    },
});
