import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RootStackParamList } from 'src/types';

import HomeScreen from "./src/screens/HomeScreen";
import TranscribeScreen from './src/screens/TranscribeScreen';


const Stack = createNativeStackNavigator<RootStackParamList>();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="home" component={HomeScreen}/>
      <Stack.Screen name="transcribe" component={TranscribeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}