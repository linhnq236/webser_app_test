/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity,
  Image
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import HomeScreen from './screens/HomeScreen';
import LedScreen from './screens/LedScreen';
import LoginScreen from './screens/LoginScreen';
//
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const App: () => React$Node = () => {
  return (
    <>
      <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          itemStyle: { marginVertical: 5 },
        }}>
        <Drawer.Screen
          name="HomePage"
          options={{ drawerLabel: 'Home' }}
          component={HomeScreen} />
        <Drawer.Screen
          name="LedPage"
          options={{ drawerLabel: 'Led' }}
          component={LedScreen} />
        <Drawer.Screen
          name="LoginPage"
          options={{ drawerLabel: 'Login' }}
          component={LedScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
 </>
  );
};


export default App;
