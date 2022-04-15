import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  StatusBar,
  TextInput,
  TouchableOpacity,
  StyleSheet,
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

const LoginScreen = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [buttonLoader, setButtonLoader] = useState(false);
  return (
    <SafeAreaView style={{flex: 1}} backgroundColor="#fff">
      <View style={Styles.mainContainer}>
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
            paddingHorizontal: 10,
          }}>
          <View style={styles.topRowContainer}>
            <LeftIcon width={40} height={40} style={{color: '#000'}} />
            <Text
              onPress={() => {
                alert('ok');
              }}
              style={{
                fontFamily: Theme.Font.Regular,
                fontSize: 16,
                color: '#9A9FA5',
              }}>
              Already a member?
              <Text style={{color: '#000', marginLeft: 5}}>Sign in</Text>
            </Text>
          </View>
          <View style={{flex: 1, paddingHorizontal: 10}}>
            <Text style={styles.pageHeading}>Sign up</Text>
            <Text style={styles.inputHeading}>Phone number</Text>
            <InputContainer
              leftArea={
                <>
                  <LoginCallIcon
                    width={25}
                    height={30}
                    style={{color: '#000'}}
                  />
                  <TouchableOpacity style={styles.rightSideBorder}>
                    <Text style={{fontFamily: Theme.Font.Bold}}>+999</Text>
                  </TouchableOpacity>
                </>
              }
              centerArea={
                <TextInput
                  style={styles.inputStyle}
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
            <Text style={styles.inputHeading}>Email</Text>
            <InputContainer
              leftArea={
                <>
                  <LoginEmail width={25} height={20} style={{color: '#000'}} />
                  <View style={styles.rightSideBorder} />
                </>
              }
              centerArea={
                <TextInput
                  style={styles.inputStyle}
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
            <Text style={styles.inputHeading}>Password</Text>
            <InputContainer
              leftArea={
                <>
                  <LoginPassword
                    width={25}
                    height={30}
                    style={{color: '#000'}}
                  />
                  <View style={styles.rightSideBorder} />
                </>
              }
              centerArea={
                <TextInput
                  style={styles.inputStyle}
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
            <View style={{width: '100%', paddingVertical: 40}}>
              <Button />
            </View>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  topRowContainer: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  pageHeading: {
    fontFamily: Theme.Font.Bold,
    fontSize: 48,
    paddingVertical: 20,
  },
  inputHeading: {
    color: '#222222',
    fontFamily: Theme.Font.Medium,
    paddingVertical: 15,
    top: 5,
  },
  rightSideBorder: {
    borderRightWidth: 2,
    paddingHorizontal: 5,
    borderColor: '#F81F59',
    height: 20,
  },
  inputStyle: {
    flex: 1,
    paddingHorizontal: 5,
    fontFamily: Theme.Font.Bold,
  },
  inputContainer: {
    width: '100%',
    height: 55,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#9A9FA5',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
});
export default LoginScreen;
