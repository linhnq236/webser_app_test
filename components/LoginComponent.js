import * as React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import {
  Button,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native';
const dimensions = Dimensions.get('window');
const setHeight = Math.round(dimensions.width * 9 / 16);
const setWidth = dimensions.width;
const LoginPage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.up}>
          <Image source={require('../images/bk.jpeg')}
          style = {styles.logo}
          >
          </Image>
        </View>
        <View style={styles.down}>
          <View style={styles.Login}>
            <TextInput style={styles.inputLogin}
              placeholder = "Enter your email"
            ></TextInput>
          </View>
          <View style={styles.Login}>
            <TextInput style={styles.inputLogin}
              placeholder = "Enter  your password"
              secureTextEntry
            ></TextInput>
          </View>
          <TouchableOpacity style={styles.LoginButton} >
           <Text style = {styles.loginButtonTitle}>LOGIN</Text>
         </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'pink'
  },
  up:{
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: setWidth,
    height: setHeight,
  },
  down: {
    flex: 7,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // backgroundColor: 'blue'
  },
  Login: {
    marginTop: 30
  },
  inputLogin: {
    backgroundColor: "white",
    paddingHorizontal: 10,
    width: setWidth,
    borderRadius: 20,
  },
  LoginButton: {
    width: setWidth,
    flexDirection: 'column',
    padding: 3,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginButtonTitle: {
    width: setWidth,
    backgroundColor: '#1877F2',
    color: "white",
    fontWeight: 'bold',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: 20,
    padding: 15
  }
});
export default LoginPage;
