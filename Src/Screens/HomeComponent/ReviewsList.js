import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import {reviewsList} from '../../Comman/DummyData';
import StarRating from 'react-native-star-rating';
import Theme from '../../Comman/Theme';

const ReviewsList = () => {
  return (
    <View style={{width: '100%', height: 'auto'}}>
      <FlatList
        data={reviewsList}
        keyExtractor={(item, index) => item.key}
        renderItem={({item}) => {
          return (
            <View
              style={{
                width: '100%',
                height: 80,
                borderBottomWidth: 1,
                borderColor: '#000',
                padding: 10,
                flexDirection: 'row',
                alignItems: 'center',
                // alignSelf: 'flex-end',
                justifyContent: 'space-between',
              }}>
              <StarRating
                starSize={20}
                reversed
                disabled={true}
                maxStars={5}
                rating={item.review}
                fullStarColor={'#FDD501'}
              />
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text
                  style={{
                    right: 10,
                    fontFamily: Theme.Font.Regular,
                    color: '#222222',
                  }}>
                  Rohit Arora
                </Text>
                <Image
                  source={item.userProfile}
                  style={{width: 60, height: 60, resizeMode: 'contain'}}
                />
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default ReviewsList;
