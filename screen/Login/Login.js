/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, KeyboardAvoidingView,Button,StatusBar,TextInput,TouchableOpacity} from 'react-native';
import axios from 'axios'
import { robotoWeights } from 'react-native-typography'

export default class Login extends Component {
  componentDidMount(){
   ;}
 
  submit(){
    console.log('login clicked')
    let data = JSON.stringify({
      password: this.state.password,
      username: this.state.email
  })

  axios.post('reqres.in/api/login', data, {
      headers: {
          'Content-Type': 'application/json',
      }
  }
  ).then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
   
  }
  constructor(props){
    super(props)
  this.state =  {
            id:'',
           username:'',
           password:''
    };
}
  render()

  {
    const {navigate} = this.props.navigation;
    return (
    <View style={styles.container}>
    <View style={styles.logoContainer}>
    <Text style={[robotoWeights.light, styles.logo]}>Welcome Bro</Text>
    </View>
    <View style={styles.formContainer}>
    <View style={styles.container}>
  
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <TextInput
      
      onChangeText= {(text)=>{
        this.setState({email: text});
      }}
      placeholder = "Email"
      placeholderTextColor = '#2c3e50'
      style={styles.input}
      
      />    
        <TextInput style={styles.input}
         onChangeText= {(text)=>{
          this.setState({password: text});
        }}
      underlineColorAndroid = 'rgba(0, 0, 0, 0)'
      placeholder = "Password"
      placeholderTextColor = '#2c3e50'
      secureTextEntry
     
      />    
      <TouchableOpacity
          style={styles.button}
          onPress={() =>{this.submit()}}
        >
          <Text style={[ robotoWeights.thin, styles.buttonText]}>Ayo Masuk </Text>
        </TouchableOpacity>
         </KeyboardAvoidingView>
     </View>
    </View>
    </View>
    );
  }
} 

const styles = StyleSheet.create({
    logoContainer:{
        alignItems:'center',
        flexGrow:2,
        justifyContent:'center'
      },
      logo:{
    
   
   
        fontSize:50,
        color:'#fff',
        fontWeight:'300',
        textShadowColor: 'rgba(0, 0, 0, 0.4)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
      },
  container: {
    backgroundColor:'#e35c5c',
    justifyContent:"center",
    alignItems:"center",
   
    flex:1,
  },
  formContainer:{
      flex:1
  },
  buttonContainer:{
    backgroundColor:'#2980b9',
    paddingVertical:15,
    width:400

  },

  buttonText:{
    textAlign:'center',
    color: '#FFFFFF',
    fontWeight: '700'
  },
  logo:{
    
   
   
    fontSize:40,
    color:'#fff',
    fontWeight:'300',
    textShadowColor: 'rgba(0, 0, 0, 0.4)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
  logoContainer:{
    alignItems:'center',
    flexGrow:1,
    justifyContent:'center'
  },
  
input:{
  borderRadius:10,
  height:50,
  width:370,
  backgroundColor: '#ecf0f1',
  marginBottom:20,
  color: '#2c3e50',

  paddingHorizontal:50,
  shadowColor: 'rgba(0, 0, 0, 0.1)',
shadowOpacity: 0.7,
elevation: 10,
shadowRadius: 15 ,
shadowOffset : { width: 10, height: 13},
},
  container: {
    backgroundColor:'#e35c5c',
      justifyContent:"center",
      alignItems:"center",
     
      flex:1,
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
    padding: 14,
    margin:10,
    width:370
  },
  
  buttonText:{
   
    fontSize:20,
    color:'#e35c5c',
  fontWeight: '500'
  }
  
  
});
