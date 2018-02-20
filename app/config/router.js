import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'
import { Button, View, Text, Image } from 'react-native';

import LoginScreen from '../screens/login_screen/index'
import MainScreen from '../screens/main_screen/index'
import RegisterScreen from '../screens/register_screen/index'
import SplashScreen from '../screens/splash_screen/index'

class ModalScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 30 }}>This is a modal!</Text>
          <Button
            onPress={() => this.props.navigation.goBack()}
            title="Dismiss"
          />
        </View>
      );
    }
  }

const MainStack = StackNavigator(
    {
      SplashScreen: {
        screen: SplashScreen,
      },
      LoginScreen: {
        screen: LoginScreen,
      },
      RegisterScreen: {
        screen: RegisterScreen,
      },
      MainScreen: {
        screen: MainScreen,
      }
    },
    {
      /* Same configuration as before */
      initialRouteName: 'LoginScreen',
      /* navigationOptions: {
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }, */
    }
  );

  const RootStack = StackNavigator(
    {
      Main: {
        screen: MainStack,
      },
      MyModal: {
        screen: ModalScreen,
      },
    },
    {
      mode: 'modal',
      headerMode: 'none',
    }
  );

export default class Router extends React.Component {
    render() {
      return <RootStack />;
    }
  }