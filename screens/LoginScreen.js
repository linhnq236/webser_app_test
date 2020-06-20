import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import HomePage from '../components/HomeComponent';
import LedPage from '../components/LedComponent';
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
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const NavigationDrawerStructure = (props)=> {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={()=> toggleDrawer()}>
        {/*Donute Button Image */}
        <Ionicons
           name="ios-menu"
           size={50}
           style={{ marginLeft: 5 , color: "#ffffff"}}
         >
         </Ionicons>
      </TouchableOpacity>
    </View>
  );
}
function LoginScreen({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="LoginPage"
      screenOptions={{
        headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#f4511e', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        }
      }}>
      <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={{
          title: 'Home Page', //Set Header Title
        }}/>
      <Stack.Screen
        name="LedPage"
        component={LedPage}
        options={{
          title: 'Led Page', //Set Header Title
        }}/>
    </Stack.Navigator>
  );
}
export default LoginScreen;
