import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

const Header = ({containerStyle, title, leftComponent, rightComponent}) => {
  return (
    <View
      style={{
        width: '100%',
        height: 50,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        ...containerStyle,
      }}>
      {leftComponent}
      <Text>{title}</Text>
      {rightComponent}
    </View>
  );
};

export default Header;
