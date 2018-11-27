import React from 'react';
import { Text, FlatList, View, StyleSheet, TouchableOpacity } from 'react-native';
//import { NavigationActions } from 'react-navigation';
import Avatar from './Avatar';
import OrgRow from './OrgRow';

export class OrgList extends React.Component {
  render() {
    return <FlatList data={this.props.data} renderItem={({item}) => 
           <TouchableOpacity onPress={() => this.props.navigation.navigate('Walk')}><OrgRow item={item} /></TouchableOpacity>} />;
  }
}