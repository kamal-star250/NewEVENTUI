import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Theme from '../../Comman/Theme';

const AdAuther = () => {
  return (
    <View style={{width: '100%', height: 'auto', padding: 15}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={Theme.Images.dummyUser}
          style={{width: 60, height: 60, borderRadius: 30}}
        />
        <View style={{paddingHorizontal: 10}}>
          <Text
            style={{
              fontFamily: Theme.Font.Medium,
              fontSize: 18,
              color: '#222222',
              paddingVertical: 5,
            }}>
            Rohit Arora
          </Text>
          <Text
            style={{
              fontFamily: Theme.Font.Regular,
              fontSize: 14,
              color: '#979797',
            }}>
            Memebr snice may 2020
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                color: '#F81F59',
                fontFamily: Theme.Font.Regular,
                paddingVertical: 5,
              }}>
              View profile
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AdAuther;
