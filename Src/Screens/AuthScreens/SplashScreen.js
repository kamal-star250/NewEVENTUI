import React, {Component} from 'react';
import {View, Text, Image, SafeAreaView, StatusBar} from 'react-native';

const SplashScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}} backgroundColor="red">
      <StatusBar backgroundColor={'red'} />
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Text onPress={() => navigation.navigate('LoginScreen')}>Login</Text>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;
