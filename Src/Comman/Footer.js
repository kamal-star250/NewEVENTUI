import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, TouchableH} from 'react-native';
import HomeIcon from '../Assets/SVGFiles/home.svg';
import SearchIcon from '../Assets/SVGFiles/search.svg';
import ChatIcon from '../Assets/SVGFiles/chat.svg';
import ProfileIcon from '../Assets/SVGFiles/profile.svg';

const Footer = () => {
  return (
    <View
      style={{
        width: '100%',
        height: 45,
        padding: 10,
        backgroundColor: '#fff',
        flexDirection: 'row',
        // alignItems: 'flex-end',
        justifyContent: 'space-between',
      }}>
      <TouchableOpacity>
        <HomeIcon width={40} height={40} style={{color: '#000'}} />
      </TouchableOpacity>
      <SearchIcon width={40} height={40} style={{color: '#000'}} />
      <ChatIcon width={40} height={40} style={{color: '#000'}} />
      <ProfileIcon width={40} height={40} style={{color: '#000'}} />
    </View>
  );
};

export default Footer;
