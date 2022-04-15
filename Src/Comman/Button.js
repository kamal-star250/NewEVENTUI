import React, {Component} from 'react';
import {TouchableOpacity, Text, Image, View} from 'react-native';
import Theme from './Theme';

const Button = () => {
  return (
    <TouchableOpacity
      style={{
        width: '100%',
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F81F59',
      }}>
      <Text style={{fontFamily: Theme.Font.Bold, color: '#fff', fontSize: 16}}>
        Text
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
