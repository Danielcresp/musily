import React, {Component} from 'react';
import {StyleSheet,Platform} from 'react-native';
import {Scene, Router} from 'react-native-router-flux';

import LoginView from './src/LoginView'
import HomeView from './src/HomeView'
import AlbumDetailView from './src/AlbumDetailView'

// import { platform } from 'os';

type Props = {};
export default class App extends Component<Props> {
    
    render() {
        const isAndroid = Platform.OS === 'android'
        return <Router>
          <Scene key="root">
            <Scene key="login" component={LoginView} hideNavBar/>
            <Scene key="home" component={HomeView} hideNavBar/>
            <Scene key="albumDetail" component={AlbumDetailView} hideNavBar={isAndroid}/>
          </Scene>
        </Router>
      }
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#C2E4F1',
    marginTop: 30,
    width: '100%',
    height:'100%',
  },
});