
import React, { Component } from 'react';
import { View } from 'react-native'
import { StackNavigator } from 'react-navigation'

export default class SplashScreen extends React.Component {
    static navigationOptions = {
        header: null // !!! Hide Header
    }
    render() {
        return (
            <View />
        )
    }
}
