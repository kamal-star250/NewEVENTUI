import React, {Component, createContext, useContext} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const InputContainer = ({leftArea, centerArea, rightArea}) => {
  return (
    <View
      style={{
        width: '100%',
        height: 55,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#9A9FA5',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 5,
      }}>
      {leftArea}
      {centerArea}
      {rightArea}
    </View>
  );
};

export default InputContainer;
