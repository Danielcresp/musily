import React, {Component} from 'react';
import {ListView,TouchableOpacity} from 'react-native';
import AlbumBox from './AlbumBox'
import { Actions } from 'react-native-router-flux';
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

  handleBoxPress(album) {
    Actions.albumDetail({ album })
  }
  render() {
    
    return (
      <ListView
        enableEmptySections={true}
        dataSource={this.state.dataSource}
        renderRow={(album) => {
          return (
            <TouchableOpacity
            onPress={() => this.handleBoxPress(album)}>
              <AlbumBox album ={album}/>
            </TouchableOpacity>
          )
        }}
      />
    )
  }
}

