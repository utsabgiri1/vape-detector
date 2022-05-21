import  React , {Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';

export default class App extends Component {
  render(){
    return (

        <AppContainer/>

    );
  }
}

const AppNavigator = createSwitchNavigator({
  Login : LoginScreen,
  Home : HomeScreen
})

var AppContainer = createAppContainer(AppNavigator)