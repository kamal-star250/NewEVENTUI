import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';

import Modal from 'react-native-modal';
import CloseModal from '../Assets/SVGFiles/close.svg';
import Country from './Country';
import Theme from './Theme';
import RightGreen from '../Assets/SVGFiles/rightGreen.svg';

const CityListModal = ({countryListOpen, hideModal, selectedCityCode}) => {
  const [countryList, setCountryList] = useState([]);
  const [holdList, setHoldList] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  useEffect(() => {
    setCountryList(Country);
    setHoldList(Country);
  }, [countryListOpen]);

  const filterList = text => {
    const newData = countryList.filter(function (item) {
      const itemData1 = item.country_code
        ? item.country_code.toUpperCase()
        : ''.toUpperCase();
      const itemData2 = item.countryname
        ? item.countryname.toUpperCase()
        : ''.toUpperCase();
      const itemData = itemData1.concat(itemData2);
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });

    setCountryList(newData);
  };
  return (
    <Modal
      isVisible={countryListOpen}
      style={{overflow: 'hidden', flex: 1, margin: 0}}>
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <View
          style={{
            flex: 1,
            padding: 10,

            overflow: 'hidden',
          }}>
          <View style={{alignSelf: 'flex-end'}}>
            <TouchableOpacity onPress={hideModal}>
              <CloseModal width={25} height={30} style={{color: '#000'}} />
            </TouchableOpacity>
          </View>
          <View style={{flex: 1}}>
            <View style={{width: '100%', padding: 10, borderBottomWidth: 1}}>
              <TextInput
                placeholder="Search your country"
                style={{
                  width: '100%',
                  height: 45,
                  borderWidth: 1,
                  borderRadius: 25,
                  paddingHorizontal: 10,
                  fontFamily: Theme.Font.Medium,
                }}
                onChangeText={text => {
                  if (text.length < 2) {
                    setCountryList(holdList);
                  } else {
                    filterList(text);
                  }
                }}
              />
            </View>
            <FlatList
              data={countryList}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      setSelectedCity(item.countryname);
                      selectedCityCode(item);
                    }}
                    // onPress={console.log(item, 'pp')}
                    style={{
                      borderBottomWidth: 1,
                      padding: 10,
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Text style={{fontFamily: Theme.Font.Medium}}>
                        {item.country_code}
                      </Text>
                      <Text
                        style={{marginLeft: 10, fontFamily: Theme.Font.Medium}}>
                        {item.countryname}
                      </Text>
                    </View>
                    {selectedCity == item.countryname ? (
                      <RightGreen width={25} height={20} />
                    ) : null}
                  </TouchableOpacity>
                );
              }}
            />
            {/* {countryList.map(item => {
              return <Text>{item.countryname}</Text>;
            })} */}
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default CityListModal;
