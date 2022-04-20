// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  cardStyleInterpolator,
  CardStyleInterpolators,
} from '@react-navigation/native-stack';

import {createDrawerNavigator} from '@react-navigation/drawer';

// imprort all screens
import SplashScreen from '../Screens/AuthScreens/SplashScreen';
import LoginScreen from '../Screens/AuthScreens/LoginScreen';
import SignupScreen from '../Screens/AuthScreens/SignupScreen';

/// other stack screens
import DashboardScreen from '../Screens/HomeComponent/DashboardScreen';
import AboutAdScreen from '../Screens/HomeComponent/AboutAdScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const AuthStack = createNativeStackNavigator();
const OtherStack = createNativeStackNavigator();

function AuthScreens() {
  return (
    <AuthStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="SignupScreen">
      <AuthStack.Screen name="SplashScreen" component={SplashScreen} />
      <AuthStack.Screen name="LoginScreen" component={LoginScreen} />
      <AuthStack.Screen name="SignupScreen" component={SignupScreen} />
    </AuthStack.Navigator>
  );
}
function OtherScreenStack() {
  return (
    <OtherStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="AboutAdScreen">
      <OtherStack.Screen name="DashboardScreen" component={DashboardScreen} />
      <OtherStack.Screen name="AboutAdScreen" component={AboutAdScreen} />
    </OtherStack.Navigator>
  );
}

function DrawerStack() {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen name="OtherScreenStack" component={OtherScreenStack} />
    </Drawer.Navigator>
  );
}
function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="DrawerStack">
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
