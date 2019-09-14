import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Welcome from './screen/Welcome';
import Login from './screen/Login/Login';
import Register from './screen/Login/Register';

import React, {Component} from 'react';
const AppNavigator = createStackNavigator({
  Welcome: {screen: Welcome, navigationOptions :{
    header:null
  }},
  
  Login: {screen: Login, navigationOptions: () => ({
    header: null,  
  })},
Register: {screen: Register, navigationOptions: () => ({
    header: null,  
  })},

});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
