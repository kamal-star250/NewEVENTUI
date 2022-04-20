import React, {Component, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  ImageBackground,
  StyleSheet,
  StatusBar,
} from 'react-native';

import Styles from '../../Comman/CommanStyles';
import Footer from '../../Comman/Footer';
import Header from '../../Comman/Header';
import Theme from '../../Comman/Theme';
// import svg files
import Calander from '../../Assets/SVGFiles/calander.svg';
import Star from '../../Assets/SVGFiles/Star.svg';
import TotalImages from '../../Assets/SVGFiles/totalImages.svg';
import Filter from '../../Assets/SVGFiles/filterIcon.svg';
import LocationIcon from '../../Assets/SVGFiles/locationIcon.svg';
import NotificationIcon from '../../Assets/SVGFiles/notificationIcon.svg';
import CityListModal from '../../Comman/CityListModal';
import {subCategoryList, offerList, AdList} from '../../Comman/DummyData';

const DashboardScreen = () => {
  const [subCatList, setSubCatList] = useState(subCategoryList);
  const [offerListData, setOfferListData] = useState(offerList);
  const [adsList, setAdsList] = useState(AdList);
  const [selectesSubCat, setSelectedSubCat] = useState('');
  const [cityModal, setCityModal] = useState(false);
  const [selectedCity, setSelectedCity] = useState('Taif, Mecca');

  return (
    <SafeAreaView style={{flex: 1}} backgroundColor="#fff">
      <CityListModal
        countryListOpen={cityModal}
        hideModal={() => {
          setCityModal(false);
        }}
        selectedCityCode={item => {
          setSelectedCity(item.countryname);
          setCityModal(false);
        }}
      />
      <View style={Styles.mainContainer}>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        <Header
          leftComponent={
            <TouchableOpacity
              onPress={() => {
                setCityModal(true);
              }}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={{fontFamily: Theme.Font.Regular, color: '#222222'}}>
                {selectedCity}
              </Text>
              <View style={{left: 5}}>
                <LocationIcon width={15} height={20} style={{color: '#000'}} />
              </View>
            </TouchableOpacity>
          }
          title={<Text></Text>}
          rightComponent={
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: 50,
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity>
                <Filter width={20} height={20} />
              </TouchableOpacity>
              <TouchableOpacity>
                <NotificationIcon
                  width={20}
                  height={20}
                  style={{color: '#000'}}
                />
              </TouchableOpacity>
            </View>
          }
        />
        <View style={{flex: 1}}>
          <Text style={styles.popularTextStyle}>Popular</Text>
          {/* sub category list area  */}
          <View style={{height: 50, width: '100%'}}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={subCatList}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      setSelectedSubCat(item.sub_name);
                    }}
                    style={[
                      styles.subCategoryListContainer,
                      {
                        backgroundColor:
                          selectesSubCat == item.sub_name ? '#F81F59' : '#fff',
                      },
                    ]}>
                    <Text
                      style={{
                        fontFamily: Theme.Font.Regular,
                        fontWeight: '400',
                        color:
                          selectesSubCat == item.sub_name ? '#fff' : '#9E9E9E',
                      }}>
                      {item.sub_name}
                    </Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
          {/* Offer list area */}

          <View style={{width: '100%', height: 130}}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={offerList}
              renderItem={({item}) => {
                return (
                  <View style={styles.offerContainer}>
                    <ImageBackground
                      borderRadius={10}
                      source={Theme.Images.offerBackImage}
                      style={styles.offerImage}>
                      <Text style={styles.offerText}>{item.heading}</Text>
                      <Text style={styles.offerPriceText}>{item.price}</Text>
                    </ImageBackground>
                  </View>
                );
              }}
            />
          </View>

          <Text style={styles.popularTextStyle}>Featured</Text>
          <FlatList
            data={adsList}
            renderItem={({item}) => {
              return (
                <View style={{width: '100%', height: 220, padding: 10}}>
                  <View style={styles.featuresListContainer}>
                    <ImageBackground
                      source={Theme.Images.dummyAdImage}
                      borderRadius={10}
                      style={styles.adbackImage}>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          padding: 10,
                        }}>
                        <TotalImages width={20} height={20} />
                        <Text style={styles.totalImageCount}>2</Text>
                      </View>
                    </ImageBackground>
                    <View style={styles.rattindRowContainer}>
                      <Text
                        style={{
                          fontFamily: Theme.Font.Regular,
                          color: '#222222',
                        }}>
                        {item.rattings}
                        <Star width={15} height={15} />
                      </Text>

                      <Text
                        style={{
                          fontFamily: Theme.Font.Medium,
                          color: '#222222',
                        }}>
                        {item.about}
                      </Text>
                    </View>
                    <View style={styles.calanderRow}>
                      <Text style={styles.priceText}>{item.price}</Text>
                      <Text style={styles.priceText}>{item.createdDate}</Text>
                      <Calander
                        width={15}
                        height={15}
                        style={{color: '#222222'}}
                      />
                    </View>
                  </View>
                </View>
              );
            }}
          />
        </View>

        <Footer activePage={'Dashboard'} />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  popularTextStyle: {
    alignSelf: 'flex-end',
    fontFamily: Theme.Font.Bold,
    paddingVertical: 10,
    right: 10,
  },
  subCategoryListContainer: {
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 10,
    height: 35,
    marginHorizontal: 5,
    borderColor: '#D1D0D0',
    minWidth: 50,
  },
  offerContainer: {
    width: 220,
    height: 125,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  offerImage: {
    flex: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  offerText: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: Theme.Font.Bold,
    fontSize: 18,
  },
  offerPriceText: {
    color: '#fff',
    textAlign: 'center',
    paddingVertical: 20,
    fontFamily: Theme.Font.Regular,
  },
  featuresListContainer: {
    width: '100%',
    height: 210,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  adbackImage: {
    width: '100%',
    height: 150,
    justifyContent: 'flex-end',
    backgroundColor: 'green',
    resizeMode: 'cover',
    borderRadius: 10,
  },
  totalImageCount: {
    left: 10,
    fontFamily: Theme.Font.Bold,
    fontSize: 18,
    color: '#fff',
  },
  rattindRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  calanderRow: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    paddingHorizontal: 5,
  },
  priceText: {
    marginRight: 10,
    color: '#222222',
    fontFamily: Theme.Font.Regular,
  },
});

export default DashboardScreen;
