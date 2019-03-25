import React, {Component} from 'react';
import {StyleSheet, Text, View,Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
require("console");

type Props = {};
export default class AlbumBox extends Component<Props> {

  render() {
    const {image, name, likes, comments} = this.props.album 
    return (
        <View style={styles.albunBox}>
        <Image
        style={styles.imag} 
        source={{uri:image}}
        />
        <View style={styles.name}>
        <Text style={styles.name}>{name}</Text>
          <View style={styles.row}>
            <View>
              <Text style={styles.icon}><Ionicons name="md-checkmark-circle" size={32}/></Text>
              <Text style={styles.icon}>{likes}</Text>
            </View>
            <View>
              <Text style={styles.icon}><Ionicons name="md-checkmark-circle" size={32}/></Text>
              <Text style={styles.icon}>{comments}</Text>
            </View>  
          </View>
        </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  albunBox:{
    marginTop:10,
    backgroundColor:"#4FAFEF",
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOpacity: .1,
    shadowOffset: {
        height:5,
        width:-2,
    },
    elevation:8,
  },
  imag:{
    width:170,
    height:170,
  },
  info:{
    flex:1,
    flexDirection:'column',
    justifyContent :'center',
  },
  name:{
    fontSize:15 ,
    marginTop:10,
    marginLeft:15,
    alignItems:'center',
    justifyContent :'center',
    color:'black',
  },
  row:{
    flexDirection: 'row',
    marginLeft:20,
    marginHorizontal:  10,
  },
  icon:{
    fontSize:15,
    marginTop:10,
    marginLeft:20,
    alignItems:'center',
    justifyContent :'center',
    color:'#3E3E3E'
  },
});
