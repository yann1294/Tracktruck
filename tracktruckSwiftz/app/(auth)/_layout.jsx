import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {Stack} from "expo-router";

const Auth_layout = () => {
  return (
    <Stack>
        <Stack.Screen name='login' options={{headerShown: false}} />
        <Stack.Screen name='signup' options={{headerShown: false}} />
        <Stack.Screen name='forget' options={{headerShown: false}} />
        <Stack.Screen name='verification' options={{headerShown: false}} />
        <Stack.Screen name='resetPassword' options={{headerShown: false}} />
        <Stack.Screen name='fillProfile' options={{headerShown: false}} />
        <Stack.Screen name='location' options={{headerShown: false}} />
    </Stack>
  )
}

export default Auth_layout;

const styles = StyleSheet.create({})