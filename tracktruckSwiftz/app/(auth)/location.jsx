import { StyleSheet, Text, View, Image, ScrollView, StatusBar, TextInput } from 'react-native';
import React, { useContext } from 'react';
import Map from "../../assets/images/map.png";
import Locate from "../../assets/images/locate.svg";
import Button from '../../components/Button/Button';
import Search from "../../assets/images/search_icon.svg";
import {router, Link} from "expo-router";
import ThemeContext from '../../theme/ThemeContext';

const Location = () => {
  const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <View style={styles.container}>
      <StatusBar translucent barStyle='dark-content' />
      <Image source={Map} alt='image' style={styles.image} />
      <View style={styles.input_box}>
        <TextInput style={[styles.input]} placeholder="Search location" />
        <Search style={styles.search} />
      </View>
      <Locate style={styles.locate} />
      <View style={styles.button_box}>
        <Button buttonText="Confirm" onPress={() => {router.push('home')}} />
      </View>
    </View>
  )
}

export default Location;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  locate: {
    position: 'absolute',
    bottom: '45%',
    left: '45%',
  },
  button_box: {
    position: 'absolute',
    bottom: '8%', 
    left: '10%',
    right: '10%',
    alignItems: 'center',
},
  input_box: {
    position: 'absolute',
    top: '8%',
    left: '5%',
    width: '90%',
  },
  input: {
    backgroundColor: '#f6f6f6',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 42,
    fontSize: 16,
    elevation: 2,
  },
  search: {
    position: 'absolute',
    top: '33%', 
    left: 15,
  }
});
