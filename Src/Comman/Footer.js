import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, TouchableH} from 'react-native';
import HomeIcon from '../Assets/SVGFiles/home.svg';
import SearchIcon from '../Assets/SVGFiles/search.svg';
import ChatIcon from '../Assets/SVGFiles/chat.svg';
import ProfileIcon from '../Assets/SVGFiles/profile.svg';
import Plus from '../Assets/SVGFiles/plus.svg';

const Footer = () => {
  return (
    <View
      style={{
        width: '100%',
        alignSelf: 'center',
        height: 50,
        padding: 10,
        backgroundColor: '#fff',
        flexDirection: 'row',
        // alignItems: 'flex-end',
        justifyContent: 'space-between',
      }}>
      <TouchableOpacity>
        <HomeIcon width={25} height={25} style={{color: '#000'}} />
      </TouchableOpacity>
      <SearchIcon width={25} height={25} style={{color: '#000'}} />
      <TouchableOpacity
        style={{
          width: 45,
          height: 45,
          borderRadius: 22.5,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#F81F59',
          top: -30,
        }}>
        <Plus width={25} height={25} style={{color: '#000'}} />
      </TouchableOpacity>
      <ChatIcon width={25} height={25} style={{color: '#000'}} />
      <ProfileIcon width={25} height={25} style={{color: '#000'}} />
    </View>
  );
};

export default Footer;
