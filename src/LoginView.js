import React, {Component} from 'react';
import {StyleSheet,View,Text,TextInput,Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase,{firebaseAuth} from "./firebase"

require('console');

type Props = {};
export default class LoginView extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = { 
            email: '',
            password: '',
       };
    }
    render() {
   
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Bienvenido a Musily</Text>
        <View >
          <Button 
              title="Sign Up Facebook"
              color="#4267B2"
              onPress={() => {
                  alert("Welcome with Facebook")
              }}
          />
        </View>
        <View style={styles.button}>
          <Button 
              title="Sign Up Google"
              color="#DC4D41"
              onPress={() => {
                  alert("Welcome with Google")
              }}
          />
        </View>
        <Text style={styles.text}>Accede a tu cuenta con email</Text>
        
        <TextInput
        style={styles.input}
        placeholder="...Email"
        onChangeText={(value) => this.setState({email: value})}
        value={this.state.email}
        />
        <TextInput
        style={styles.input}
        placeholder="...Password"
        onChangeText={(value) => this.setState({password: value})}
        value={this.state.password}
        />
        <View style={styles.button}>
        <Button 
            style={{marginTop:20}}
            title="Login"
            color="#841584"
            onPress={() => { 
              if(this.state.email.localeCompare('')==0){
                alert("Invalid UserEmail");
                console.warn("Invalid Email")
                console.warn(this.state.email)
                return;
            }
            if(this.state.password.localeCompare('')==0){
                alert("Invalid PassWord");
                console.warn("Invalid password")
                return;
            }else{
              const Email= this.state.email
              const PassWord= this.state.password
              console.warn(Email,PassWord)
              firebaseAuth.signInWithEmailAndPassword(Email, PassWord).catch(function(error) {
              
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                alert(errorMessage);
                alert(errorCode);
                // ...
              });
              Actions.home()
              alert('Accediendo a tu cuenta')
            }

              
            }}
        />
        </View>
        
        <Text style={styles.text}>Aun no tienes cuenta?</Text>
        <Button 
            style={styles.button}
            title="Registrate"
            color="#841584"
            onPress={() => { 
            Actions.singUp()
          }}
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
  text:{
    fontSize: 14,
    fontWeight: '600',
    marginTop: 20,
    backgroundColor: 'transparent',
    color: 'black',
  }
  ,
  input:{
    margin:10,
    backgroundColor:'white',
    height: 40,
    width:200,
    borderColor: 'green',
    borderLeftWidth: 6,
  },
  button:{
    marginTop: 10,
  },
});