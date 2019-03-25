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
     dataSource: ds
    }
  }
  componentDidMount(){
    this.updateDataSource(this.props.albums)
  }

  componentWillReceiveProps(newProps){ //cada ves que cambia las probiedades se ejecuta 
    if(newProps.albums !== this.props.albums){
    this.updateDataSource(newProps.albums)
    }
  }
  
  updateDataSource =data =>{
    this.setState = ({
      dataSource: this.dataSource.cloneWithRows(data)
    })
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

