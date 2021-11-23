import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from './TabScreens/HomeScreen';
import OrderScreen from './TabScreens/OrderScreen';
import ProfileScreen from './TabScreens/ProfileScreen'

const Tab = createBottomTabNavigator();

export default class TabNavScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Tab.Navigator 
    screenOptions={{
        "tabBarActiveTintColor": "#e1b12c",
        "tabBarInactiveTintColor": "#424242",
        "tabBarStyle": [
          {
            "display": "flex",
            "backgroundColor": "#272C2F"
          },
          null
        ]
    }}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarLabel: 'Home',headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <AwesomeIcon  name="home" color={color} size={size} />
          ),
        }}/>
      <Tab.Screen name="Orders" component={OrderScreen} options={{
          tabBarLabel: 'Orders',headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <AwesomeIcon  name="shopping-basket" color={color} size={size} />
          ),
        }}/>
      <Tab.Screen name="Profile" component={ProfileScreen} options={{
          tabBarLabel: 'Profile',headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <AwesomeIcon  name="user" color={color} size={size} />
          ),
        }}/>
    </Tab.Navigator>
    );
  }
}
