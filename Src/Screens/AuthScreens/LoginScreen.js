import React, {Component} from 'react';
import {View, Text, Image, SafeAreaView, StatusBar} from 'react-native';

const LoginScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}} backgroundColor="red">
      <StatusBar backgroundColor={'red'} />
      <View
        style={{
          flex: 1,
          backgroundColor: '#f2f2f2',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text onPress={() => navigation.navigate('SplashScreen')}>Splash</Text>
        <View
          style={{
            width: 140,
            height: 150,
            backgroundColor: '#fff',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.34,
            shadowRadius: 6.27,
            elevation: 10,
            margin: 5,
          }}></View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
