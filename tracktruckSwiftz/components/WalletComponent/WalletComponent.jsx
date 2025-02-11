import { StyleSheet, Text, View, Dimensions,Pressable, ScrollView, Platform } from 'react-native';
import React, { useContext } from 'react';
import Button from '../Button/Button';
import { router } from "expo-router";
import ThemeContext from '../../theme/ThemeContext';
import { tab_data3 } from '../../Data/Data';


const { width, height } = Dimensions.get('window');

const WalletComponent = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <View style={styles.container2}>
      <View style={styles.content2}>
        <Text style={styles.price2}>
          €1052,84
        </Text>
        <Text style={[styles.available2, { color: theme.color }]}> Available Balance</Text>
      </View>
      <View style={styles.button_box2}>
        <Button buttonText="Recharge Now" onPress={() => { router.push('(screens)/topUp') }} />
      </View>
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={[styles.heading, {color: theme.text2}]}>Transaction History</Text>
          <Text style={styles.see}>See All</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.tab_container}>
          {tab_data3.map((d) => (
            <Pressable style={[styles.tab, {backgroundColor: theme.card2}]} key={d.id}>
              <View style={styles.left}>
                <View style={[styles.image_box, {backgroundColor:theme.heading}]}>
                  {d.icon}
                </View>
                <View style={styles.content}>
                  <Text style={[styles.heading, {color: theme.color}]}>{d.heading}</Text>
                  <Text style={[styles.text, {color: theme.text2}]}>{d.text}</Text>
                </View>
              </View>
              <Text style={styles.time}>{d.time}</Text>
            </Pressable>
          ))}
        </View>
        </ScrollView>
    </View>
    </View>
  )
}

export default WalletComponent;

const styles = StyleSheet.create({
  container2: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content2: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    paddingTop:Platform.OS === 'web'? 10 : '45%',
  },
  price2: {
    fontSize: width * 0.06,
    lineHeight: width * 0.07,
    fontFamily: 'Roboto_700Bold',
    color: '#FA6900',
    paddingTop: 10,
    textAlign: 'center',
  },
  available2: {
    fontSize: width * 0.035,
    lineHeight: width * 0.04,
    fontFamily: 'Roboto_400Regular',
    color: '#000000',
    paddingTop: 5,
  },
  button_box2: {
    marginTop: 20,
    width: '100%',
  },
  container: {
    
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 30,
    paddingHorizontal: 16,
  },
  heading: {
    fontSize: width * 0.045,
    lineHeight: width * 0.06,
    fontFamily: 'PTSerif_700Bold_Italic',
  },
  see: {
    fontSize: width * 0.03,
    lineHeight: width * 0.04,
    fontFamily: 'Roboto_400Regular',
    color: '#FA6900',
  },
  tab_container: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  tab: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderRadius: 10,
    backgroundColor: '#f6f6f6',
    marginBottom: 20,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image_box: {
    width: width * 0.075,
    height: width * 0.075,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#060962',
    borderRadius: 5,
  },
  content: {
    marginLeft: 10,
    gap: 3,
  },
  text: {
    fontSize: width * 0.03,
    lineHeight: width * 0.035,
    fontFamily: 'Roboto_400Regular',
    color: '#505050',
    maxWidth: '75%',
  },
  time: {
    fontSize: width * 0.025,
    lineHeight: width * 0.03,
    fontFamily: "Roboto_500Medium",
    color: '#FA6900',
  }
});
