import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  StartScreen  from './Screens/MainScreens/StartScreen'

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
        <Stack.Screen options={{headerShown: false}} name="StartScreen" component={ StartScreen } />
      </Stack.Navigator>
    </NavigationContainer>
    );
  }
}
