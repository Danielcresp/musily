import React, {Component} from 'react';
import {ListView} from 'react-native';
import AlbumBox from './AlbumBox'
require('console');

type Props = {};
export default class AlbumList extends Component<Props> {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    
    this.state = {
      dataSource: ds.cloneWithRows(props.albums)
    };
  }
  

  render() {
    return (
      <ListView
        enableEmptySections={true}
        dataSource={this.state.dataSource}
        renderRow={(album) => <AlbumBox album ={album}/>}
      />
    )
  }
}

