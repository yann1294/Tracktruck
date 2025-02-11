import { StyleSheet, Text, View, Pressable, StatusBar, Dimensions, ScrollView, SafeAreaView, Image, Platform } from 'react-native';
import React, { useContext } from 'react';
import Back from "../../assets/images/back.svg";
import Dark_back from "../../assets/images/dark_back.svg";
import { router } from "expo-router";
import ThemeContext from '../../theme/ThemeContext';
import WalletComponent from '../../components/WalletComponent/WalletComponent';
import Swiper from 'react-native-swiper';
import Chip from "../../assets/images/chip.svg";
import Signal from "../../assets/images/signal.svg";
import Master from "../../assets/images/master2.svg";
import { card_data } from '../../Data/Data';

const { width, height } = Dimensions.get('window');

const Wallet = () => {
  const { theme, darkMode } = useContext(ThemeContext);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.header}>
        <Pressable onPress={() => { router.push('home') }} style={styles.back}>
          {darkMode ? <Dark_back /> : <Back />}
        </Pressable>
        <Text style={[styles.heading, { color: theme.heading }]}>My Wallet</Text>
      </View>

      {/* Content Below Swiper Cards */}
      <View style={styles.swiperWrapper}>
          <Swiper
            style={styles.swiperContainer}
            showsPagination={false}
            dotStyle={styles.dot}
            activeDotStyle={styles.activeDot}
            loop={true}
            horizontal={true}
          >
            {card_data.map((d) => (
              <View style={styles.card} key={d.id}>
                <Image source={d.image} style={styles.image} />
                <View style={styles.content}>
                  <View style={styles.row}>
                    <Chip />
                    <Signal />
                  </View>
                  <Text style={styles.card_no}>{d.card_no}</Text>
                  <View style={styles.valid_row}>
                    <Text style={styles.valid}>VALID THRU</Text>
                    <Text style={styles.valid_no}>{d.valid}</Text>
                  </View>
                  <View style={styles.bottom}>
                    <Text style={styles.name}>{d.name}</Text>
                    <Master style={styles.master} />
                  </View>
                </View>
              </View>
            ))}
          </Swiper>
        </View>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollView}>
       
        <WalletComponent />
      </ScrollView>
    </SafeAreaView>
  );
}

export default Wallet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '5%',
    backgroundColor: 'transparent',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    marginVertical:Platform.OS === 'web'? 10 : 50,
  },
  heading: {
    position: 'absolute',
    left: '50%',
    transform: [{ translateX: -50 }],
    fontSize: 24,
    lineHeight: 34,
    fontFamily: 'PTSerif_700Bold_Italic',
    textAlign: 'center',
  },
  back: {
    borderRadius:Platform.OS === 'web'?  50 : null,
    alignItems:Platform.OS === 'web'?  'center' : null,
    justifyContent:Platform.OS === 'web'?  'center' : null,
    backgroundColor:Platform.OS === 'web'?  'lightgrey' : null,
    width:Platform.OS === 'web'? 30 : null,
    height:Platform.OS === 'web'? 30 : null,
  },
  scrollView: {
    width: '100%',
  },
  swiperWrapper: {
    height: 250, 
    marginBottom: 20,
  },
  swiperContainer: {
  },
  card: {
    width: '100%',
    height:Platform.OS === 'web'? 250 : 200,
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width:Platform.OS === 'web'? '100%' : '98%',
    height: '100%',
    borderRadius: 10,
    resizeMode: 'cover',
  },
  content: {
    position: 'absolute',
    bottom:Platform.OS === 'web'? '22%' : '13%',
    left: '6%',
    gap: 4,
    width: '80%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  card_no: {
    fontSize: 24,
    lineHeight: 30,
    fontFamily: 'Roboto_400Regular',
    color: '#ffffff',
  },
  valid_row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 5,
  },
  valid: {
    fontSize: 12,
    lineHeight: 16,
    fontFamily: 'Roboto_400Regular',
    color: '#ffffff',
  },
  valid_no: {
    fontSize: 16,
    lineHeight: 19,
    fontFamily: 'Roboto_400Regular',
    color: '#ffffff',
  },
  name: {
    fontSize: 16,
    lineHeight: 20,
    fontFamily: 'Roboto_400Regular',
    color: '#ffffff',
  },
  bottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  master: {},
});
