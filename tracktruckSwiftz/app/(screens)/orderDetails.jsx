import { StyleSheet, Text, View, Image, Pressable, ScrollView, StatusBar, Platform } from 'react-native';
import React, { useContext } from 'react';
import Back from "../../assets/images/back.svg";
import Dark_back from "../../assets/images/dark_back.svg";
import Van from "../../assets/images/van.png";
import Button from '../../components/Button/Button';
import {router} from "expo-router";
import ThemeContext from '../../theme/ThemeContext';
import OrderDetailsComponent from '../../components/OrderDetailsComponent/OrderDetailsComponent';

const OrderDetails = () => {
  const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <View style={[styles.container, {backgroundColor:theme.background}]}>
      <StatusBar barStyle={darkMode? 'light-content' : 'dark-content'} />
      <View style={styles.header}>
        <Pressable onPress={() => {router.push('order_confirmation')}} style={styles.back}>
       { darkMode? <Dark_back /> : <Back />}
       </Pressable>
        <Text style={[styles.heading, {color:theme.heading}]}>Track Order</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.image_container}>
        <Image style={styles.image} source={Van} alt='Image' />
        <Text style={[styles.number, {color:theme.color}]}>KA05AK0434</Text>
      </View>
      <OrderDetailsComponent />
      <View style={styles.button_container}>
        <Button buttonText="Track Now" onPress={() => {router.push('(screens)/orderTracking')}} />
      </View>
      </ScrollView>
    </View>
  )
}

export default OrderDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    marginBottom: 20,
  },
  heading: {
    position: 'absolute',
    left: '45%',
    transform: [{ translateX: -50 }],
    fontSize: 24,
    lineHeight: 34,
    fontFamily: 'PTSerif_700Bold_Italic',
    textAlign: 'center',
  },
  back: {
    width: '10%',
    height: '50%',
  },
  image_container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 30,
    gap: 10,
  },
  image: {
    width: 180,
    height: 90,
  },
  number: {
    fontSize: 15,
    lineHeight: 23,
    fontFamily: 'Roboto_500Medium',
  },
  button_container: {
    marginTop: 30,
    marginBottom:Platform.OS === 'web'? '1%' : '15%',
  }
})