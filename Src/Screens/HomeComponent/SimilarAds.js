import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import {AdList} from '../../Comman/DummyData';
import Theme from '../../Comman/Theme';
import Calander from '../../Assets/SVGFiles/calander.svg';
import Star from '../../Assets/SVGFiles/Star.svg';

const SimilarAds = () => {
  return (
    <View style={{width: '100%', height: 'auto'}}>
      <Text style={styles.similarText}>Similar to this ad</Text>
      <FlatList
        data={AdList}
        keyExtractor={(item, index) => item.key}
        renderItem={({item}) => {
          return (
            <View style={styles.cardContainer}>
              <View style={styles.rowContainer}>
                <Image
                  source={item.imageURL}
                  style={{
                    width: '30%',
                    height: '90%',
                    borderRadius: 10,
                    resizeMode: 'cover',
                    alignSelf: 'center',
                  }}
                />
                <View
                  style={{
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      fontFamily: Theme.Font.Medium,
                      color: '#222222',
                    }}>
                    Places to visit in Taif
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingVertical: 10,
                    }}>
                    <Text
                      style={{
                        fontFamily: Theme.Font.Regular,
                        color: '#222222',
                        marginRight: 10,
                      }}>
                      21 march, 2022
                    </Text>
                    <Calander
                      width={15}
                      height={15}
                      style={{color: '#222222'}}
                    />
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontFamily: Theme.Font.Regular,
                        color: '#222222',
                      }}>
                      {item.rattings}
                      <Star width={15} height={15} />
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  similarText: {
    alignSelf: 'flex-end',
    fontFamily: Theme.Font.Bold,
    paddingVertical: 10,
    color: '#222222',
    fontWeight: '700',
    fontSize: 18,
  },
  cardContainer: {
    width: '98%',
    alignSelf: 'center',
    height: 110,
    backgroundColor: '#fff',
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 3,
    borderRadius: 10,
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
});
export default SimilarAds;
