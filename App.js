import React, {Component} from 'react';
import {StyleSheet,View} from 'react-native';
import AlbumList from './src/AlbumList';
import { getAlbums } from './src/api-client';
require('console');

type Props = {};
export default class App extends Component<Props> {
  componentDidMount(){ // Se llama cuando el componete ya este rendereado
    getAlbums()
    .then(data => {
        return console.warn(data);
    })
    // .them(data => console.warn(data))
  }

  render() {
    const album = {
      img: 'https://upload.wikimedia.org/wikipedia/en/4/42/Beatles_-_Abbey_Road.jpg',
      name: 'The Beatles - "Abbey Road',
      likes: 200,
      comments: 140,
   }
    const albums = Array(500).fill(album)
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
