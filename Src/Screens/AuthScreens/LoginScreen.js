import React, {Component} from 'react';
import {View, Text, Image, SafeAreaView, StatusBar} from 'react-native';
import HomeIcon from '../../Assets/SVGFiles/home.svg';
import LOGO from '../../Assets/SVGFiles/LOGO.svg';
import SearchIcon from '../../Assets/SVGFiles/search.svg';
import ChatIcon from '../../Assets/SVGFiles/chat.svg';
import ProfileIcon from '../../Assets/SVGFiles/profile.svg';

const LoginScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}} backgroundColor="red">
      <StatusBar
        // backgroundColor={'#fff'}
        color="red"
        animated={true}
        backgroundColor="#000"
        // barStyle={statusBarStyle}
        // showHideTransition={statusBarTransition}
        hidden={false}
      />
      <View
        style={{
          flex: 1,
          backgroundColor: 'red',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {/* <LOGO width={100} height={100} color="#000" /> */}
          <HomeIcon width={100} height={100} style={{color: '#000'}} />
          <SearchIcon width={100} height={100} style={{color: '#000'}} />
          <ChatIcon width={100} height={100} style={{color: '#000'}} />
          <ProfileIcon width={100} height={100} style={{color: '#000'}} />
        </View>

        <Text onPress={() => navigation.navigate('SplashScreen')}>Splash</Text>
        {/* <View
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
          }}></View> */}
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
