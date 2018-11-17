import React from 'react';
import { Text, FlatList, View, } from 'react-native';
import Avatar from './Avatar';

export class OrgList extends React.Component {
  render() {
    return <FlatList data={this.props.data} renderItem={({item}) => <View><Avatar initials="HS" size={35} backgroundColor={"teal"} /><Text>{item.name}</Text></View>} />;
  }
}