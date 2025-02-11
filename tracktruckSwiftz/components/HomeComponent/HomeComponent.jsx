import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import React, { useContext, useState } from 'react';
import { tab_data, stack_data, service_data } from '../../Data/Data';
import ThemeContext from '../../theme/ThemeContext';

const HomeComponent = () => {
  const [activeTab, setActiveTab] = useState(tab_data[0].id);
  const { theme, darkMode } = useContext(ThemeContext);

  const pressTab = (id) => {
    setActiveTab(id);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      
      {/* Section 1: Tabs */}
      <View style={styles.tabContainer}>
        {tab_data.map((d) => (
          <Pressable
            style={[
              styles.tab,
              { backgroundColor: theme.card2 },
              activeTab === d.id && styles.activeTab,
            ]}
            onPress={() => { pressTab(d.id); }}
            key={d.id}
          >
            <Text
              style={[
                styles.tabText,
                { color: theme.color },
                activeTab === d.id && styles.activeTabText,
              ]}
            >
              {d.text}
            </Text>
          </Pressable>
        ))}
      </View>
      
      {/* Section 2: Stack */}
      <View style={styles.container2}>
        <Pressable style={[styles.stack, { backgroundColor: theme.card2 }]}>
          <View style={styles.row}>
            <View style={styles.left}>
              <Text style={[styles.heading, { color: theme.color }]}>Tracking ID : </Text>
              <Text style={[styles.value, { color: theme.color }]}>#SNL23456TY78</Text>
            </View>
            <Pressable style={styles.tab2}>
              <Text style={styles.tabText2}>On-Progress</Text>
            </Pressable>
          </View>
          <View style={styles.stackContainer}>
            {stack_data.map((d, index) => (
              <View key={d.id}>
                <View style={styles.row2}>
                  {darkMode ? d.dark_icon : d.icon}
                  <View style={styles.right}>
                    <Text style={[styles.heading2, { color: theme.text3 }]}>{d.heading}</Text>
                    <Text style={[styles.value, { color: theme.color }]}>{d.text}</Text>
                  </View>
                </View>
                {index === 2 && <View style={[styles.line, { borderColor: theme.color }]} />}
              </View>
            ))}
          </View>
          <View style={styles.row3}>
            <Pressable style={styles.button2}>
              <Text style={styles.buttonText}>View</Text>
            </Pressable>
          </View>
        </Pressable>
      </View>
      
      {/* Section 3: Services */}
      <View style={styles.container3}>
        <Text style={[styles.heading, { color: theme.heading }]}>Services</Text>
        <View style={styles.stackContainer2}>
          {service_data.map((d) => (
            <Pressable
              style={[styles.stack2, { backgroundColor: theme.heading2 }]}
              key={d.id}
            >
              <Image source={d.image} style={styles.image2} />
              <Text style={styles.stackText2}>{d.text}</Text>
            </Pressable>
          ))}
        </View>
      </View>
    </View>
  );
};

export default HomeComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
  },
  tabContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F6F6F6',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    minWidth: '30%',
    marginBottom: 10,
  },
  tabText: {
    fontSize: 14,
    lineHeight: 24,
    fontFamily: 'Roboto_400Regular',
  },
  activeTab: {
    backgroundColor: '#060962',
  },
  activeTabText: {
    color: '#ffffff',
  },
  container2: {
    marginVertical: 20,
  },
  stack: {
    padding: 16,
    borderRadius: 13,
    backgroundColor: '#f6f6f6',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  row2: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 10,
  },
  right: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  heading: {
    fontSize: 14,
    lineHeight: 24,
    fontFamily: 'Roboto_700Bold',
  },
  value: {
    fontSize: 12,
    fontFamily: 'Roboto_500Medium',
  },
  tab2: {
    borderRadius: 5,
    paddingVertical: 4,
    paddingHorizontal: 10,
    backgroundColor: '#ffffff',
  },
  tabText2: {
    fontSize: 10,
    lineHeight: 14,
    fontFamily: 'Roboto_400Regular',
    color: '#FA6900',
  },
  row3: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    width: '100%',
    justifyContent: 'flex-end',
  },
  stackContainer: {
    marginTop: 16,
  },
  heading2: {
    fontSize: 12,
    fontFamily: 'Roboto_400Regular',
    color: '#505050',
  },
  button2: {
    borderRadius: 5,
    backgroundColor: '#060962',
    width: 81,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -25,
  },
  buttonText: {
    fontSize: 14,
    lineHeight: 16,
    fontFamily: 'Roboto_500Medium',
    color: '#FFFFFF',
    textTransform: 'capitalize',
  },
  line: {
    borderLeftWidth: 1,
    borderStyle: 'dashed',
    height: 13,
    marginLeft: 7,
    marginTop: -10,
  },
  container3: {
    padding: 16,
  },
  stackContainer2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginVertical: 16,
    gap: 14,
  },
  stack2: {
    backgroundColor: '#FA6900',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    width: '47.5%',
    aspectRatio: 1,
  },
  image2: {
    width: '80%',
    height: '50%',
    resizeMode: 'contain',
  },
  stackText2: {
    fontSize: 15,
    lineHeight: 25,
    fontFamily: 'PTSerif_700Bold_Italic',
    color: '#ffffff',
    textAlign: 'center',
    marginTop: 8,
  },
});
