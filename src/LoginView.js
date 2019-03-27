import React, {Component} from 'react';
import {StyleSheet,View,Text,TextInput,Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase from "firebase";

 // Initialize Firebase
 const config = {
    apiKey: "AIzaSyAsCmsPj7qLVTb4z1iOFvIrSj2xie8FS1A",
    authDomain: "musily-47930.firebaseapp.com",
    databaseURL: "https://musily-47930.firebaseio.com",
    projectId: "musily-47930",
    storageBucket: "musily-47930.appspot.com",
    messagingSenderId: "705398848810"
  };
  firebase.initializeApp(config);

require('console');


type Props = {};
export default class LoginView extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = { 
            text: '  name',
            password: '  password'
       };
    }
    nexHome(){
        console.warn('nex')
        Actions.home()
    }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Bienvenido a Musily</Text>
        <TextInput
        style={{backgroundColor:'white',height: 40,width:200, borderColor: 'green', borderLeftWidth: 6}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
        />
        <TextInput
        style={{backgroundColor:'white',height: 40,width:200, borderColor: 'green', borderLeftWidth: 6,marginTop:10}}
        onChangeText={(password) => this.setState({password})}
        value={this.state.password}
        />
        <Button 
            style={{marginTop:20}}
            onPress={this.nexHome}
            title="Login"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20,
    backgroundColor: 'transparent',
    color: 'white',
  },
});