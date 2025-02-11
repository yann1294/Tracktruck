import { StyleSheet, Text, View, Image, ScrollView, Pressable, StatusBar } from 'react-native';
import React, { useContext } from 'react';
import Map from "../../assets/images/map2.png";
import Landmark1 from "../../assets/images/land_mark1.svg";
import Landmark2 from "../../assets/images/land_mark2.svg";
import Route from "../../assets/images/route.svg";
import Van from "../../assets/images/van2.png";
import Button from '../../components/Button/Button';
import {router, Link} from "expo-router";
import ThemeContext from '../../theme/ThemeContext';

const OrderTracking = () => {
  const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <View style={styles.container}>
      <StatusBar translucent barStyle='dark-content' />
      <Image source={Map} alt='image' style={styles.image} />
      <Landmark1 style={styles.landmark1} />
      <Landmark2 style={styles.landmark2} />
      <Route style={styles.route} />
      <Image source={Van} style={styles.van} alt='image' />
      <View style={styles.button_container}>
        <Button buttonText="Back Home" onPress={() => {router.push('home')}} />
      </View>
    </View>
  )
}

export default OrderTracking;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
        width: '100%',
        height: '100%',
        position: 'relative',
    },
    landmark1: {
        position: 'absolute',
        left: '75%',   
        zIndex: 100,
        top: '30%',
    },
    landmark2: {
        position: 'absolute',
        left: '13%',
        top: '55.5%',  
        zIndex: 100, 
    },
    route: {
        position: 'absolute',
        left: '16%',
        top: '34%',
        zIndex: 100,
        width: 220,
        height: 200,
    },
    van: {
        position: 'absolute',
        left: '52%',
        top: '45%',
        width: 21,
        height: 44,
        zIndex: 200,
    },
    button_container: {
        position: 'absolute',
        width: '100%',
        paddingHorizontal: 20,
        bottom: 40,
    }
})