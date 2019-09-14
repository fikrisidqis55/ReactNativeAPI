  /**
   * Sample React Native App
   * https://github.com/facebook/react-native
   *
   * @format
   * @flow
   */

  import React, {Component} from 'react';
  import {Platform, StyleSheet, Text, View, Image, KeyboardAvoidingView,Button,StatusBar,TextInput,TouchableOpacity} from 'react-native';

  import Login from './Login/Login'
  import Register from './Login/Register'
  import { robotoWeights } from 'react-native-typography'
  import {  createAppContainer } from "react-navigation";
  import {createStackNavigator} from "react-navigation-stack"

  class Welcome extends Component {
    static navigationOptions = {
      header : null
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        
          <View style={styles.container}>
            <Text style={[robotoWeights.light, styles.logo]}
            >Halllo</Text>

            <Text style={[robotoWeights.thin, {color:'#fff',flex:2, fontSize:20, textAlign:"center",top:90, fontWeight:'500'}]}> Selamat Datang </Text>
            <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigate('Login')}
          >
            <Text style={[robotoWeights.thin, styles.buttonText]}>Login </Text>
          </TouchableOpacity>
  
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.push('Register')}
          >
            <Text style={[ robotoWeights.thin, styles.buttonText]}>Register </Text>
          </TouchableOpacity>
          </View>
        </View>
      
      );
    }
  } 

  const AppNavigator = createStackNavigator({
    Welcome: {
      screen: Welcome, navigationOptions:{
        header:null
      }
    },
    Login: {
      screen: Login, navigationOptions:{
        header:null
      }
    },
    Register: {
      screen: Register, navigationOptions:{
        header:null
      }
    }
  });

  export default createAppContainer(AppNavigator);


  const styles = StyleSheet.create({
    
      container: {
          backgroundColor:'#e35c5c',
          justifyContent: 'center',
          paddingHorizontal: 10,
          flex:1,
          
        
          
        },
        logo:{
          flex:1,
          padding:70,
          textAlign:"center",
          fontSize:50,
          color:'#fff',
          fontWeight:'300',
          textShadowColor: 'rgba(0, 0, 0, 0.4)',
          textShadowOffset: {width: -1, height: 1},
          textShadowRadius: 10
        },
        button: {
          borderRadius:10,
          alignItems: 'center',
          backgroundColor: '#fff',
          shadowColor: 'rgba(0, 0, 0, 0.1)',
      shadowOpacity: 0.7,
      elevation: 10,
      shadowRadius: 15 ,
      shadowOffset : { width: 10, height: 13},
          padding: 20,
          margin:10
          
        },
        buttonContainer:{
          flex:4
        },
        buttonText:{
        
          fontSize:20,
          color:'#e35c5c',
        fontWeight: '500'
        }
        
  });
