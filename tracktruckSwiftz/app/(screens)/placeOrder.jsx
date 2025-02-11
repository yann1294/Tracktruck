import { StyleSheet, Text, View, Pressable, ScrollView, StatusBar, Platform } from 'react-native';
import React, { useContext, useState } from 'react';
import Back from "../../assets/images/back.svg";
import Dark_back from "../../assets/images/dark_back.svg";
import { tab_data4 } from '../../Data/Data';
import Button from '../../components/Button/Button';
import { router } from "expo-router";
import ThemeContext from '../../theme/ThemeContext';
import PlaceOrderComponent from '../../components/PlaceOrderComponent/PlaceOrderComponent';

const PlaceOrder = () => {
  const { theme, darkMode } = useContext(ThemeContext);
  const [active_tab, setActive_tab] = useState(tab_data4[0].id);

  const press = (id) => {
    setActive_tab(id);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.header}>
        <Pressable onPress={() => { router.push('home') }} style={styles.back}>
          {darkMode ? <Dark_back /> : <Back />}
        </Pressable>
        <Text style={[styles.heading, { color: theme.heading }]}>Place Order</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.tab_container}>
          {tab_data4.map((d) => (
            <Pressable style={[styles.tab, active_tab === d.id && styles.active_tab]} key={d.id} onPress={() => { press(d.id) }}>
              {active_tab === d.id ? d.active_icon : d.icon}
            </Pressable>
          ))}
        </View>
        <PlaceOrderComponent />
        <View style={styles.button_box}>
          <Button buttonText="Next" onPress={() => { router.push('(screens)/orderPayment') }} />
        </View>
      </ScrollView>
    </View>
  )
}

export default PlaceOrder;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
    flex: 1,
  },
  back: {
    width: '10%',
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
  tab_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 30,
    marginTop: 30,
    paddingBottom: 20,
  },
  tab: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F6F6F6',
    borderRadius: 10,
  },
  active_tab: {
    backgroundColor: '#FA6900',
  },
  button_box: {
    marginTop: 20,
    paddingBottom:Platform.OS === 'web'? '2%' : '13%',
  },
});
