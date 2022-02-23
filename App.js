import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import AuthenticationStack from './src/routes';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
  <NavigationContainer>
    <AuthenticationStack/>
    <StatusBar style="auto" backgroundColor='#fff' />
  </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

