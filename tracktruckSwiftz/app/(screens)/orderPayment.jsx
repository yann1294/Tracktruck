import { StyleSheet, Text, View, Pressable, ScrollView, StatusBar, Dimensions, Platform } from 'react-native';
import React, { useContext } from 'react';
import Back from "../../assets/images/back.svg";
import Dark_back from "../../assets/images/dark_back.svg";
import { router } from "expo-router";
import Clock from "../../assets/images/clock.svg";
import Button from '../../components/Button/Button';
import ThemeContext from '../../theme/ThemeContext';
import OrderPaymentComponent from '../../components/OrderPaymentComponent/OrderPaymentComponent';

const OrderPayment = () => {
  const { theme, darkMode } = useContext(ThemeContext);
  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.header}>
        <Pressable onPress={() => { router.push('(screens)/placeOrder') }} style={styles.back}>
          {darkMode ? <Dark_back /> : <Back />}
        </Pressable>
        <Text style={[styles.heading, { color: theme.heading }]}>Order Details</Text>
      </View>

      <ScrollView contentContainerStyle={[styles.scrollContent]} showsVerticalScrollIndicator={false}>
        <View style={styles.contentContainer}>
          <View style={[styles.stack, { backgroundColor: theme.card2 }]}>
            <Clock />
            <View style={styles.content}>
              <Text style={[styles.time, { color: theme.text3 }]}>2023</Text>
              <Text style={[styles.date, { color: theme.color }]}>Fri, May 21</Text>
              <Text style={[styles.time, { color: theme.text3 }]}>10.00am</Text>
            </View>
          </View>
          <OrderPaymentComponent />
        </View>
        <View style={[styles.button_container]}>
          <Button buttonText="Edit package" textColor="#FA6900" borderColor="#FA6900" backgroundColor="transparent" fontsize={16} width='48%' />
          <Button buttonText="Make payment" onPress={() => { router.push('(screens)/makePayment') }} fontsize={16} width='48%' />
        </View>
      </ScrollView>

    </View>
  )
}

export default OrderPayment;

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
    marginBottom: 25,
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

  },
  stack: {
    borderRadius: 10,
    backgroundColor: '#f6f6f6',
    paddingVertical: 10,
    paddingHorizontal: 20,
    gap: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  content: {
    gap: 3,
  },
  time: {
    fontSize: 14,
    lineHeight: 16,
    fontFamily: 'Roboto_400Regular',
  },
  date: {
    fontSize: 16,
    lineHeight: 18,
    fontFamily: 'Roboto_700Bold',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  contentContainer: {

  },
  button_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
    width: '100%',
    marginBottom:Platform.OS === 'web'? '1%' : '13%',
  },
});
