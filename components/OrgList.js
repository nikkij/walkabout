import React from 'react';
import { Text, FlatList, View, StyleSheet } from 'react-native';
import Avatar from './Avatar';
import OrgRow from './OrgRow';

export class OrgList extends React.Component {
  render() {
    return <FlatList data={this.props.data} renderItem={({item}) => <OrgRow item={item} />} />;
  }
}