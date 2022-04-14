// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  cardStyleInterpolator,
  CardStyleInterpolators,
} from '@react-navigation/native-stack';

// import {
//   CardStyleInterpolators,
//   createStackNavigator,
// } from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import SplashScreen from '../Screens/AuthScreens/SplashScreen';
import LoginScreen from '../Screens/AuthScreens/LoginScreen';

function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        justifyContent: 'center',
      }}>
      <Text style={{fontSize: 30}}>Home Screen</Text>
      <View
        style={{
          width: 140,
          height: 150,
          backgroundColor: '#fff',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,
          elevation: 3,
        }}></View>
      {/* <LOGO width={100} height={100} /> */}
    </View>
  );
}

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const AuthStack = createNativeStackNavigator();

function AuthScreens() {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen
        name="LoginScreen"
        component={LoginScreen}
        // screenOptions={{
        //   cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        // }}
      />
      <AuthStack.Screen
        name="SplashScreen"
        component={SplashScreen}
        // screenOptions={{
        //   cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        // }}
      />
    </AuthStack.Navigator>
  );
}

function DrawerStack() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="MyStack" component={MyStack} />
    </Drawer.Navigator>
  );
}
function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="AuthScreens"
          component={AuthScreens}
          screenOptions={{screenOptions: false}}
        />
        <Stack.Screen name="DrawerStack" component={DrawerStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
