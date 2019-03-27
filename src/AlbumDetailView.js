import React, {Component} from 'react';
import {StyleSheet,View} from 'react-native';
import AlbumList from './AlbumList';
require('console');

type Props = {};
export default class AlbumDetailView extends Component<Props> {
  render() {
    const album = this.props.album
    console.warn(this.props.album)

    const albums = Array(1).fill(album)
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