import React from 'react';
import { Text, FlatList, View, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import Avatar from './Avatar';

export default function OrgRow({ item }) {

  _onPressRow = () => {
    Alert.alert('Hello there')
  };

  return(
    <TouchableOpacity onPress={this._onPressRow}>
        <View style={[styles.container]}>
            <Avatar initials="HS" size={35} backgroundColor={"teal"} />
            <Text style={styles.text} numberOfLines={1}>{item.name}</Text>
        </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    text: {
        flex: 1,
        marginHorizontal: 6,
    }
});