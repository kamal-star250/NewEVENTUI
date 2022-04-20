import React, {Component} from 'react';
import {
  TouchableOpacity,
  Text,
  Image,
  View,
  ActivityIndicator,
} from 'react-native';
import Theme from './Theme';

const ButtonLoading = () => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      disabled={true}
      style={{
        width: '100%',
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F81F59',
      }}>
      <ActivityIndicator color={'#fff'} size="large" />
    </TouchableOpacity>
  );
};

export default ButtonLoading;
