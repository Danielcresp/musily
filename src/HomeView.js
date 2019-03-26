import React, {Component} from 'react';
import {StyleSheet,View} from 'react-native';
import AlbumList from './AlbumList';
require('console');

type Props = {};
export default class HomeView extends Component<Props> {
    
  render() {
    const album = {
      image: 'https://upload.wikimedia.org/wikipedia/en/4/42/Beatles_-_Abbey_Road.jpg',
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