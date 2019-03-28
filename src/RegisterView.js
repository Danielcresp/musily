import React, {Component} from 'react';
import {StyleSheet,View,Text,TextInput,Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase,{firebaseAuth} from "./firebase"

require('console');

type Props = {};
export default class RegisterView extends Component<Props> {
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
        <Text style={styles.welcome}>Crea tu usuario</Text>
        <TextInput
        style={{backgroundColor:'white',height: 40,width:200, borderColor: 'green', borderLeftWidth: 6}}
        placeholder="...Email"
        onChangeText={(value) => this.setState({email: value})}
        value={this.state.email}
        />
        <TextInput
        style={{backgroundColor:'white',height: 40,width:200, borderColor: 'green', borderLeftWidth: 6,marginTop:10}}
        placeholder="...Password"
        onChangeText={(value) => this.setState({password: value})}
        value={this.state.password}
        />
        <TextInput
        style={{backgroundColor:'white',height: 40,width:200, borderColor: 'green', borderLeftWidth: 6,marginTop:10}}
        placeholder="...Repeat Password"
        
        />
        <View style={styles.button}>
        <Button 
            style={{marginTop:20}}
            title="Registrate"
            color="#841584"
            onPress={() => 
                {
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
                     
                      firebaseAuth.createUserWithEmailAndPassword(Email, PassWord).catch(function(error) {
                        // Handle Errors here.
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        Actions.home()
                        if (!error.code) {
                        } else {  
                          if(errorCode == 'auth/weak-password'){
                            alert(errorMessage);
                          }else{
                            alert('The password is too weak.');
                          }
                        }
                        console.warn(errorCode,errorMessage);
                        console.warn(Email)
                        console.warn(PassWord)
                       });
                    }
                    //Handle LOGIN
                }
            }
        />
        </View>
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
  button:{
    marginTop: 10,
  }
});