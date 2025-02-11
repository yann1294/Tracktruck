import { StyleSheet, Text, View, Pressable } from 'react-native';
import React, { useContext, useState } from 'react';
import Pick from "../../assets/images/pick_location.svg";
import Drop from "../../assets/images/drop_location.svg";
import Calendar from "../../assets/images/Calendar.svg";
import { router } from "expo-router";
import ThemeContext from '../../theme/ThemeContext';
import UpcomingDate from '../UpcomingDate/UpcomingDate';
import { tab_data5, tab_data6, tab_data7 } from '../../Data/Data';

const PlaceOrderComponent = () => {
  const { theme } = useContext(ThemeContext);
  const [active_tab, setActive_tab] = useState(tab_data5[0].id);
  const [active_tab2, setActive_tab2] = useState(tab_data6[0].id);
  const [active_tab3, setActive_tab3] = useState(tab_data7[0].id);

  const press = (id) => {
    setActive_tab(id);
  };

  const press2 = (id) => {
    setActive_tab2(id);
  };

  const press3 = (id) => {
    setActive_tab3(id);
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.heading, { color: theme.heading }]}>Pick-Up Point</Text>
      <View style={styles.input_container}>
        <Pressable onPress={() => { router.push('(screens)/pickup') }} style={[styles.input, { backgroundColor: theme.card2 }]}>
          <Pick />
          <Text style={[styles.input_text, { color: theme.text3 }]}>Pick-up Location</Text>
        </Pressable>
        <View style={[styles.left, { borderLeftColor: theme.text3 }]}></View>
        <Pressable onPress={() => { router.push('(screens)/drop') }} style={[styles.input, { backgroundColor: theme.card2 }]}>
          <Drop />
          <Text style={[styles.input_text, { color: theme.text3 }]}>Drop-In Location</Text>
        </Pressable>
      </View>
      <Text style={[styles.heading, { color: theme.heading }]}>Select Date</Text>
      <View style={styles.row}>
        <UpcomingDate Icon={Calendar} placeholder="MM/DD/YYYY" width={150} />
        <UpcomingDate Icon={Calendar} placeholder="MM/DD/YYYY" width={150} />
      </View>

      <Text style={[styles.header, { color: theme.heading }]}>Pick-up Time</Text>
      <View style={styles.tab_container}>
        {tab_data5.map((d) => (
          <Pressable
            style={[
              styles.tab,
              { backgroundColor: theme.card2 },
              active_tab === d.id && [styles.active_tab, { backgroundColor: theme.heading2 }]
            ]}
            key={d.id}
            onPress={() => { press(d.id) }}
          >
            <Text style={[styles.tab_text, { color: theme.color }, active_tab === d.id && styles.active_tab_text]}>{d.text}</Text>
          </Pressable>
        ))}
      </View>

      <Text style={[styles.header, { color: theme.heading }]}>Item Description</Text>
      <View style={styles.tab_container}>
        {tab_data6.map((d) => (
          <Pressable
            style={[
              styles.tab2,
              { backgroundColor: theme.card2 },
              active_tab2 === d.id && [styles.active_tab, { backgroundColor: theme.heading2 }]
            ]}
            key={d.id}
            onPress={() => { press2(d.id) }}
          >
            <Text style={[styles.tab_text, { color: theme.color }, active_tab2 === d.id && styles.active_tab_text]}>{d.text}</Text>
          </Pressable>
        ))}
      </View>

      <Text style={[styles.heading3, { color: theme.heading }]}>Package Details</Text>
      <View style={styles.tab_container3}>
        {tab_data7.map((d) => (
          <Pressable
            style={[
              styles.tab3,
              { backgroundColor: theme.card2 },
              active_tab3 === d.id && [styles.active_tab3, { backgroundColor: theme.heading2 }]
            ]}
            key={d.id}
            onPress={() => { press3(d.id) }}
          >
            <Text style={[styles.tab_text3, { color: theme.color }, active_tab3 === d.id && styles.active_tab_text3]}>{d.text}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

export default PlaceOrderComponent;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  heading: {
    fontSize: 18,
    lineHeight: 34,
    fontFamily: 'PTSerif_700Bold_Italic',
  },
  input_container: {
    marginBottom: 30,
    marginTop: 5,
  },
  input: {
    borderRadius: 5,
    padding: 10,
    gap: 10,
    backgroundColor: '#F6F6F6',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input_text: {
    fontSize: 14,
    lineHeight: 24,
    fontFamily: 'Roboto_400Regular',
    color: '#505050',
  },
  left: {
    borderLeftWidth: 1.5,
    borderStyle: 'dashed',
    borderColor: '#505050',
    height: 30,
    marginLeft: 15,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
    marginTop: 5,
    width: '80%',
  },
  header: {
    fontSize: 18,
    lineHeight: 34,
    fontFamily: 'PTSerif_700Bold_Italic',
  },
  tab_container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    flexWrap: 'wrap',
    marginTop: 10,
    marginBottom: 30,
  },
  tab: {
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 8,
    backgroundColor: '#f6f6f6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tab2: {
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#f6f6f6',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  active_tab: {
    // Add any additional styles for active tab
  },
  tab_text: {
    fontSize: 14,
    lineHeight: 24,
    fontFamily: 'Roboto_400Regular',
    color: '#505050',
  },
  active_tab_text: {
    color: '#ffffff',
  },
  heading3: {
    fontSize: 18,
    lineHeight: 34,
    fontFamily: 'PTSerif_700Bold_Italic',
  },
  tab_container3: {
    marginVertical: 16,
    gap: 16,
  },
  tab3: {
    borderRadius: 5,
    backgroundColor: '#F6F6F6',
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  tab_text3: {
    fontSize: 12,
    lineHeight: 16,
    fontFamily: 'Roboto_400Regular',
    color: '#505050',
  },
  active_tab3: {
    // Add any additional styles for active tab
  },
  active_tab_text3: {
    color: '#ffffff',
  }
});
