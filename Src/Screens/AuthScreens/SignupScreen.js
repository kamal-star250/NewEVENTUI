import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Stylesheet,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import InputContainer from '../../Comman/InputContainer';
import Styles from '../../Comman/CommanStyles';
import Theme from '../../Comman/Theme';
import Button from '../../Comman/Button';

// import svg icon's
import LeftIcon from '../../Assets/SVGFiles/loginIcon.svg';
import LoginCallIcon from '../../Assets/SVGFiles/loginCall';
import RightGreen from '../../Assets/SVGFiles/rightGreen';
import LoginEmail from '../../Assets/SVGFiles/loginEmail';
import LoginPassword from '../../Assets/SVGFiles/loginPassword';
import ButtonLoading from '../../Comman/ButtonLoading';
import CountryCodeModal from './CountryCodeModal';

const SignupScreen = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [buttonLoader, setButtonLoader] = useState(false);
  const [countryListOpen, setCountryListOpen] = useState(false);
  const [choosedCity, setChoosedCity] = useState({
    country_code: '+966',
    countryname: 'Saudi Arabia',
  });

  const SignupPress = () => {
    console.log('callled');
    if (phoneNumber == '') {
      setPhoneNumberError(true);
    } else if (email == '') {
      setEmailError(true);
    } else if (password == '') {
      setPasswordError(true);
    } else {
      callLoginAPI();
    }
  };
  const callLoginAPI = () => {
    // let phoneNumber = phoneNumber.trim();
    // let email = email.trim();
    // let password = password.trim();
    console.log('api called');
    setButtonLoader(true);
    setTimeout(() => {
      setButtonLoader(false);
      navigation.navigate('LoginScreen');
    }, 1000);
  };
  return (
    <SafeAreaView style={{flex: 1}} backgroundColor="#fff">
      <CountryCodeModal
        countryListOpen={countryListOpen}
        hideModal={() => {
          setCountryListOpen(false);
        }}
        selectedCityCode={item => {
          setChoosedCity(item);
          setCountryListOpen(false);
        }}
      />
      <View style={Styles.mainContainer}>
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
            paddingHorizontal: 10,
          }}>
          <View style={Styles.topRowContainer}>
            <LeftIcon width={40} height={40} style={{color: '#000'}} />
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('LoginScreen');
              }}>
              <Text
                style={{
                  fontFamily: Theme.Font.Regular,
                  fontSize: 16,
                  color: '#9A9FA5',
                }}>
                Already a member?
                <Text style={{color: '#000', marginLeft: 5}}>Sign in</Text>
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 1, paddingHorizontal: 10}}>
            <Text style={Styles.pageHeading}>Sign up</Text>
            <Text style={Styles.inputHeading}>Phone number</Text>
            <InputContainer
              leftArea={
                <>
                  <LoginCallIcon
                    width={25}
                    height={30}
                    style={{color: '#000'}}
                  />
                  <TouchableOpacity
                    style={Styles.rightSideBorder}
                    onPress={() => {
                      setCountryListOpen(true);
                    }}>
                    <Text style={{fontFamily: Theme.Font.Bold}}>
                      {choosedCity.country_code}
                    </Text>
                  </TouchableOpacity>
                </>
              }
              centerArea={
                <TextInput
                  style={Styles.inputStyle}
                  keyboardType="number-pad"
                  maxLength={10}
                  onChangeText={text => {
                    setPhoneNumber(text);
                  }}
                />
              }
              rightArea={
                phoneNumber.length > 8 ? (
                  <RightGreen width={25} height={20} style={{color: '#000'}} />
                ) : null
              }
            />
            {phoneNumberError && phoneNumber.length < 1 ? (
              <Text style={Styles.errorMessageText}>
                Please provide the phone number
              </Text>
            ) : null}
            <Text style={Styles.inputHeading}>Email</Text>
            <InputContainer
              leftArea={
                <>
                  <LoginEmail width={25} height={20} style={{color: '#000'}} />
                  <View style={Styles.rightSideBorder} />
                </>
              }
              centerArea={
                <TextInput
                  style={Styles.inputStyle}
                  keyboardType="email-address"
                  maxLength={30}
                  onChangeText={text => {
                    setEmail(text);
                  }}
                />
              }
              rightArea={
                email.length > 8 ? (
                  <RightGreen width={25} height={20} style={{color: '#000'}} />
                ) : null
              }
            />
            {emailError && email.length < 1 ? (
              <Text style={Styles.errorMessageText}>
                Please provide the email
              </Text>
            ) : null}
            <Text style={Styles.inputHeading}>Password</Text>
            <InputContainer
              leftArea={
                <>
                  <LoginPassword
                    width={25}
                    height={30}
                    style={{color: '#000'}}
                  />
                  <View style={Styles.rightSideBorder} />
                </>
              }
              centerArea={
                <TextInput
                  style={Styles.inputStyle}
                  secureTextEntry
                  maxLength={10}
                  onChangeText={text => {
                    setPassword(text);
                  }}
                />
              }
              rightArea={
                password.length > 5 ? (
                  <RightGreen width={25} height={20} style={{color: '#000'}} />
                ) : null
              }
            />
            {passwordError && password.length < 1 ? (
              <Text style={Styles.errorMessageText}>
                Please provide the password
              </Text>
            ) : null}
            <View style={{width: '100%', paddingVertical: 40}}>
              {!buttonLoader ? (
                <Button
                  buttonName={'Continue'}
                  onPress={() => {
                    SignupPress();
                  }}
                />
              ) : (
                <ButtonLoading />
              )}
            </View>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};

export default SignupScreen;
