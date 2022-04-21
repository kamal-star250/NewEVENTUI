import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Dimensions,
  StatusBar,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';
import Styles from '../../Comman/CommanStyles';
import Theme from '../../Comman/Theme';
import {AdList, swiperListData} from '../../Comman/DummyData';
import BackIcon from '../../Assets/SVGFiles/BackIcon.svg';
import Unliked from '../../Assets/SVGFiles/unLiked.svg';
import MoreIcon from '../../Assets/SVGFiles/moreIcon.svg';
import LocationIcon from '../../Assets/SVGFiles/locationIcon.svg';
import Calander from '../../Assets/SVGFiles/calander.svg';
import StarRating from 'react-native-star-rating';
import AdAuther from './AdAuther';
import ReviewsList from './ReviewsList';
import SimilarAds from './SimilarAds';
import {color} from 'react-native-reanimated';
import ContactMeModal from './ContactMeModal';

const AboutAdScreen = () => {
  const [swipeList, setSwipeList] = useState(swiperListData);
  const [starCount, setStarCount] = useState(1);
  const [selectedTab, setSelectedTab] = useState('Description');
  const [similarListData, setSimilarListData] = useState(AdList);
  const [mainLoader, setMainLoader] = useState(true);
  const [contactModal, setContactModal] = useState(false);

  ///////////////////////////////////
  useEffect(() => {
    setTimeout(() => {
      setMainLoader(false);
    }, 1500);
  }, []);
  return (
    <View style={[Styles.mainContainer, {paddingHorizontal: 0}]}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <ContactMeModal
        openModal={contactModal}
        closeModal={() => {
          setContactModal(false);
        }}
      />
      {mainLoader ? (
        <View
          style={[
            Styles.mainContainer,
            {alignItems: 'center', justifyContent: 'center'},
          ]}>
          <ActivityIndicator size={'large'} color="#222222" />
        </View>
      ) : (
        <View style={{flex: 1}}>
          <ScrollView style={{marginBottom: 40}}>
            {/* =================== header with back icon and heart and more icon =============== */}
            <View style={styles.headerStyle}>
              <TouchableOpacity style={styles.buttonContainer}>
                <BackIcon width={30} height={20} />
              </TouchableOpacity>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <TouchableOpacity
                  style={[styles.buttonContainer, {marginRight: 20}]}>
                  <Unliked width={30} height={20} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer}>
                  <MoreIcon width={30} height={20} style={{color: '#fff'}} />
                </TouchableOpacity>
              </View>
            </View>
            {/* =========================== swiper list container =================== */}
            <View style={styles.container}>
              <SwiperFlatList
                autoplay
                autoplayLoop
                autoplayDelay={5}
                index={0}
                showPagination
                data={swipeList}
                paginationStyle={{width: 15, height: 15}}
                keyExtractor={(item, index) => item.key}
                renderItem={({item}) => (
                  <View style={{width: width, height: 300}}>
                    <ImageBackground
                      source={item.image}
                      style={{flex: 1}}></ImageBackground>
                  </View>
                )}
              />
            </View>
            {/* ========================== post description area ================== */}
            <View style={{padding: 10, alignItems: 'flex-end'}}>
              <Text style={styles.headingText}>Places to visit in Taif</Text>
              <Text
                style={[
                  styles.headingText,
                  {
                    fontFamily: Theme.Font.Regular,
                    fontWeight: '400',
                  },
                ]}>
                $100
              </Text>
              <View style={{flexDirection: 'row-reverse'}}>
                <LocationIcon width={15} height={20} style={{color: '#000'}} />
                <Text style={styles.addressText}>
                  Taif, Mecca 234HFS,Saudi Arabia
                </Text>
              </View>
              <View style={{flexDirection: 'row-reverse', paddingVertical: 5}}>
                <Calander width={15} height={15} style={{color: '#222222'}} />
                <Text style={styles.addressText}>21 march, 2022</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row-reverse',
                  alignItems: 'center',
                  paddingVertical: 5,
                }}>
                <StarRating
                  starSize={20}
                  reversed
                  disabled={true}
                  maxStars={5}
                  rating={starCount}
                  fullStarColor={'#FDD501'}
                />
                <Text style={[styles.addressText, {color: '#979797'}]}>
                  (1 reviews)
                </Text>
              </View>
            </View>
            {/* ====================== Tabs list AUTHOR ,REVIEWS ,DESCRIPTION ================ */}
            <View
              style={{
                padding: 10,
                width: '100%',
                height: 'auto',
              }}>
              <View style={styles.tabContainer}>
                <TouchableOpacity
                  style={{
                    borderBottomWidth: selectedTab == 'Auther' ? 3 : 0,
                    borderColor: selectedTab == 'Auther' ? '#F81F59' : '#fff',
                    paddingHorizontal: 10,
                  }}
                  onPress={() => {
                    setSelectedTab('Auther');
                  }}>
                  <Text
                    style={[
                      styles.tabText,
                      {
                        fontFamily:
                          selectedTab == 'Auther'
                            ? Theme.Font.Medium
                            : Theme.Font.Regular,
                      },
                    ]}>
                    Author
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    borderBottomWidth: selectedTab == 'Reviews' ? 3 : 0,
                    borderColor: selectedTab == 'Reviews' ? '#F81F59' : '#fff',
                    paddingHorizontal: 10,
                  }}
                  onPress={() => {
                    setSelectedTab('Reviews');
                  }}>
                  <Text
                    style={[
                      styles.tabText,
                      {
                        fontFamily:
                          selectedTab == 'Reviews'
                            ? Theme.Font.Medium
                            : Theme.Font.Regular,
                      },
                    ]}>
                    Reviews
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    borderBottomWidth: selectedTab == 'Description' ? 3 : 0,
                    borderColor:
                      selectedTab == 'Description' ? '#F81F59' : '#fff',
                    paddingHorizontal: 10,
                  }}
                  onPress={() => {
                    setSelectedTab('Description');
                  }}>
                  <Text
                    style={[
                      styles.tabText,
                      {
                        fontFamily:
                          selectedTab == 'Description'
                            ? Theme.Font.Medium
                            : Theme.Font.Regular,
                      },
                    ]}>
                    Description
                  </Text>
                </TouchableOpacity>
              </View>
              {/* =================== area according to selected tab ================= */}
              {selectedTab == 'Description' ? (
                <View
                  style={{
                    width: '100%',
                    height: 'auto',
                    alignItems: 'flex-end',
                    padding: 10,
                  }}>
                  <Text style={styles.descriptionText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Sed elit.
                    Sed Lorem ipsum dolor sit amet, consectetur adipiscing Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Sed elit.
                    Sed Lorem ipsum dolor sit amet, consectetur adipiscing Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Sed elit.
                    Sed Lorem ipsum dolor sit amet, consectetur adipiscing Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Sed elit.
                  </Text>
                </View>
              ) : selectedTab == 'Reviews' ? (
                <ReviewsList />
              ) : (
                <AdAuther />
              )}
              <View
                style={{
                  width: width,
                  height: 2,
                  backgroundColor: '#E8E8E8',
                  left: -10,
                }}
              />
              {/* ======================== similar ads list ======================== */}
              {selectedTab == 'Reviews' ? null : <SimilarAds />}
            </View>
          </ScrollView>
          {/* ====================== contact me button ========================= */}
          <TouchableOpacity
            onPress={() => {
              setContactModal(true);
            }}
            activeOpacity={0.5}
            style={{
              width: width,
              height: 50,
              backgroundColor: '#F81F59',
              position: 'absolute',
              bottom: 0,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontFamily: Theme.Font.Medium,
                fontWeight: '600',
                color: '#fff',
              }}>
              Hi, Contact me
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {width: '100%', height: 250, backgroundColor: 'white'},

  buttonContainer: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(131, 129, 129, 0.42)',
  },
  popularTextStyle: {
    alignSelf: 'flex-end',
    fontFamily: Theme.Font.Bold,
    paddingVertical: 10,
    // right: 10,
    color: '#222222',
    fontWeight: '700',
    fontSize: 16,
  },
  headerStyle: {
    width: '100%',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    zIndex: 998,
  },
  headingText: {
    fontFamily: Theme.Font.Bold,
    color: '#222222',
    fontSize: 18,
    fontWeight: '700',
  },
  addressText: {
    fontFamily: Theme.Font.Regular,
    color: '#222222',
    left: 10,
  },
  tabContainer: {
    width: '100%',
    height: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tabText: {
    color: '#979797',
    fontSize: 18,
    paddingVertical: 5,
  },
  descriptionText: {
    textAlign: 'right',
    color: '#676767',
    fontFamily: Theme.Font.Regular,
  },
});
export default AboutAdScreen;
