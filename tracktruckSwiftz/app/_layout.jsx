import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {Stack} from "expo-router";
import { ThemeProvider } from '../theme/ThemeContext';

const Root_layout = () => {
  return (
    <ThemeProvider>
        <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name='index' />
        <Stack.Screen name='(auth)' />
        <Stack.Screen name='(tabs)' />
        <Stack.Screen name='(screens)/orderDetails' />
        <Stack.Screen name='(screens)/orderTracking' />
        <Stack.Screen name='(screens)/notification'  />
        <Stack.Screen name='(screens)/placeOrder' />
        <Stack.Screen name='(screens)/pickup' />
        <Stack.Screen name='(screens)/drop' />
        <Stack.Screen name='(screens)/orderPayment' />
        <Stack.Screen name='(screens)/makePayment' />
        <Stack.Screen name='(screens)/orderConfirmation' />
        <Stack.Screen name='(screens)/topUp' />
        </Stack>
    </ThemeProvider>
  )
}

export default Root_layout;

const styles = StyleSheet.create({})