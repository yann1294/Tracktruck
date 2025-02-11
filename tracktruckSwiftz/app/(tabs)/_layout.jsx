import { View, StyleSheet, Pressable, Text, Platform } from 'react-native';
import { Tabs, router } from 'expo-router';
import React, { useContext } from 'react';
import ThemeContext from '../../theme/ThemeContext';
import Home from "../../assets/images/home.svg";
import Track from "../../assets/images/track.svg";
import Wallet from '../../assets/images/wallet.svg';
import Profile from "../../assets/images/profile.svg";
import Active_Home from "../../assets/images/active_home.svg";
import Active_Track from "../../assets/images/active_track.svg";
import Active_Wallet from '../../assets/images/active_wallet.svg';
import Active_Profile from "../../assets/images/active_profile.svg";
import Dark_Home from "../../assets/images/dark_home.svg";
import Dark_Track from "../../assets/images/dark_track.svg";
import Dark_Wallet from "../../assets/images/dark_wallet.svg";
import Dark_Profile from "../../assets/images/dark_profile.svg";
import Dark_active_home from "../../assets/images/dark_active_home.svg";
import Dark_active_track from "../../assets/images/dark_active_track.svg";
import Dark_active_wallet from "../../assets/images/dark_active_wallet.svg";
import Dark_active_profile from "../../assets/images/dark_active_profile.svg";
import Square from "../../assets/images/square.svg";

const TabBarButton = ({ children, onPress, accessibilityState, title }) => {
  const { theme } = useContext(ThemeContext);
  const isSelected = accessibilityState.selected;

  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.tabButton,
        isSelected ? styles.activeTabButton : null,
      ]}
    >
      <View style={[styles.iconContainer, isSelected ? styles.activeIconContainer : null]}>
        {children}
        <Text style={[[styles.title, {color:theme.text3}], isSelected? [styles.active_text, {color: theme.heading}] : null]}>{title}</Text>
      </View>
    </Pressable>
  );
};

const TabsLayout = () => {
  const { theme, darkMode } = useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Pressable style={[styles.circle, {backgroundColor:theme.heading}]} onPress={() => {router.push('(screens)/placeOrder')}}>
          <Square />
        </Pressable>
      <Tabs
        screenOptions={({ route }) => ({
          tabBarShowLabel: false,
          tabBarButton: (props) => (
            <TabBarButton {...props} title={route.name} />
          ),
          tabBarStyle: [styles.tabBar, { backgroundColor: theme.background }],
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            let IconComponent;

            switch (route.name) {
              case 'home':
                IconComponent = darkMode 
                  ? (focused ? Dark_active_home : Dark_Home)
                  : (focused ? Active_Home : Home);
                break;
              case 'track':
                IconComponent = darkMode 
                  ? (focused ? Dark_active_track : Dark_Track)
                  : (focused ? Active_Track : Track);
                break;
              case 'wallet':
                IconComponent = darkMode 
                  ? (focused ? Dark_active_wallet : Dark_Wallet)
                  : (focused ? Active_Wallet : Wallet);
                break;
              case 'profile':
                IconComponent = darkMode 
                  ? (focused ? Dark_active_profile : Dark_Profile)
                  : (focused ? Active_Profile : Profile);
                break;
              default:
                IconComponent = null;
                break;
            }

            return IconComponent ? <IconComponent /> : null;
          },
        })}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: 'Home',
          }}
        />
        <Tabs.Screen
          name="track"
          options={{
            title: 'Track',
          }}
        />
        <Tabs.Screen
          name="wallet"
          options={{
            title: 'Wallet',
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
          }}
        />
      </Tabs>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    position: 'relative',
  },
  circle: {
    position: 'absolute',
    bottom: 50,
    left:Platform.OS === 'web'? '48%' : '42%',
    backgroundColor: '#060962',
    width:  58,
    height: 58,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100,
    borderRadius: 100,
  },
  tabBar: {
    width: '100%',
    maxHeight: 85,
    height: '100%',
    borderTopWidth: 0,
    elevation: 0,
    borderRadius: 10,
    paddingTop: 10,
    paddingHorizontal: 10,
    alignItems:'center',
    justifyContent:Platform.OS === 'web'? 'space-between' :  'center',
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: Platform.OS === 'web'? 300 : null,
  },
  iconContainer: {
    maxHeight: 40,
  },
  activeIconContainer: {},
  activeTabButton: {
    gap: 15,
  },
  title: {
    marginTop: 3,
    color: '#505050',
    fontSize: 12,
    lineHeight: 16,
    fontFamily: 'Roboto_400Regular',
    textTransform: 'capitalize',
  },
  active_text: {
    fontSize: 12,
    lineHeight: 16,
    fontFamily: 'Roboto_500Medium',
    color: '#060962',
  }
});

export default TabsLayout;
