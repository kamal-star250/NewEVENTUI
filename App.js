// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import LOGO from './Src/Assets/SVGFiles/LOGO.svg';
import Theme from './Src/Comman/Theme';

function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ff0',
        justifyContent: 'center',
      }}>
      <Text style={{fontFamily: Theme.Font.Bold, fontSize: 30}}>
        Home Screen
      </Text>
      <LOGO width={100} height={100} />
    </View>
  );
}

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const AuthStack = createNativeStackNavigator();

function AuthScreens() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="HomeScreen" component={HomeScreen} />
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
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AuthScreens" component={AuthScreens} />
        <Stack.Screen name="DrawerStack" component={DrawerStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// function MyStack() {
//   console.log('pppppp');
//   return (

//   );
// }
export default App;
