import React from 'react';
import { Text, FlatList, View, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import Avatar from './Avatar';
import { NavigationActions } from 'react-navigation';

export default function OrgRow({ item }) {

  return(
        <View style={[styles.container]}>
            <Avatar initials="HS" size={35} backgroundColor={"teal"} />
            <Text style={styles.text} numberOfLines={1}>{item.name}</Text>
        </View>
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