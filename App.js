import React, {Component} from 'react';
import {StyleSheet,View} from 'react-native';
import AlbumList from './src/AlbumList';
import { getAlbums } from './src/api-client';
require('console');

type Props = {};
export default class App extends Component<Props> {

 constructor(props){
    super(props)

  this.state={
    albums:[]
  }
}

componentDidMount(){ // Se llama cuando el componete ya este rendereado
    getAlbums()
    // .then(data => {return console.warn(data);})
    .then(data => this.setState({albums:data}))
}

  render() {
    const albums = this.state.albums

    return (
      <View style={styles.container}>
        <AlbumList albums={albums}/>
      </View>
    )
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
