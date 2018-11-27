import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class WalkScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {

    return (
      <View>
        <Text>Humane Society</Text>
      </View>
    );
  }
}
