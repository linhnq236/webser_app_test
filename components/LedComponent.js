// import * as React from 'react';
import React, {useEffect, useState} from 'react';
import { Button, View, Text, SafeAreaView,  ActivityIndicator,FlatList,ScrollView } from 'react-native';
const LedPage = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [data,setData] = useState([]);
  useEffect(() => {
   // fetch('https://reactnative.dev/movies.json')
   fetch('https://linhser.herokuapp.com/api/led_status.json')
     .then((response) => response.json())
     .then(
        (json) => setData(json.leds)
      )
     .catch((error) => console.error(error))
     .finally(() => setLoading(false));
 }, []);
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <ScrollView>
      <View>
        <Text>Helo </Text>
      </View>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>

          <Button
            title="Go to Home Page"
            onPress={() => navigation.navigate('HomePage')}
          />
          <Button
            title="Go to Login Page"
            onPress={() => navigation.navigate('LoginPage')}
          />
        </View>
      </View>
     </ScrollView>
    </SafeAreaView>
  );
}

export default LedPage;
