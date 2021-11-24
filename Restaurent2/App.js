import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  StartScreen  from './Screens/MainScreens/StartScreen';
import LoginScreen from './Screens/MainScreens/LoginScreen';
import SignUpScreen from './Screens/MainScreens/SignUpScreen'
import TabNavScreen from './Screens/SubScreens/TabNavScreen';
import FoodDesc1 from './Screens/SubScreens/TabScreens/SubScreens2/FoodDesc1';

const Stack = createNativeStackNavigator();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen options={{headerShown: false}} name="StartScreen" component={ StartScreen } />
        <Stack.Screen options={{headerShown: false}} name="LoginScreen" component={ LoginScreen } />
        <Stack.Screen options={{headerShown: false}} name="SignUpScreen" component={ SignUpScreen } />
        <Stack.Screen options={{headerShown: false}} name="TabNavScreen" component={ TabNavScreen } /> */}
        <Stack.Screen options={{headerShown: false}} name="FoodDesc1" component={ FoodDesc1 } />
      </Stack.Navigator>
    </NavigationContainer>
    );
  }
}
