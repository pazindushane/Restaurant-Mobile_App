import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import { initializeListeners } from 'react-navigation-redux-helpers';

import StartScreen from '../MainScreens/StartScreen'
import LoginScreen from '../MainScreens/LoginScreen';
import SignUpScreen from '../MainScreens/SignUpScreen';
import TabNavScreen from '../SubScreens/TabNavScreen';

export const AppNavigator = StackNavigator({
    Start: { screen: StartScreen },
    Login: { screen: LoginScreen },
    SignUp: { screen: SignUpScreen },
    Tab: { screen: TabNavScreen }
  });

class NavigateScreen extends Component {

    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        nav: PropTypes.object.isRequired,
      };

      componentDidMount() {
        initializeListeners('root', this.props.nav);
      }

  render() {

    const { dispatch, nav } = this.props;

    return (
        <AppNavigator
        navigation={addNavigationHelpers({
          dispatch,
          state: nav,
          addListener,
        })}
      />
    );
  }
}

const mapStateToProps = state => ({
    nav: state.nav,
  });

  export default connect(mapStateToProps)(NavigateScreen);
