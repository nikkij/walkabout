import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import Grid from './Grid';
import { Icon } from 'expo';
import Colors from '../constants/Colors';

const keyExtractor = ({ uri }) => uri;

export default class IconGrid extends React.Component {
    static propTypes = {
        onPressImage: PropTypes.func,
    };

    static defaultProps = {
        onPressImage: () => {},
    }

    state = {
        images: [{uri: 'https://www.flaticon.com/free-icon/track_884183'},
                 {uri: 'https://www.flaticon.com/free-icon/track_884183'},
                ],
    };

    renderItem = ({ item: { uri }, size, marginTop, marginLeft }) => {
        const style = {
            width: size,
            height: size,
            marginLeft,
            marginTop,
        };

        return (<Icon.Ionicons
            name="paw"
            size={26}
            style={{ marginBottom: -3 }}
            color={true ? Colors.tabIconSelected : Colors.tabIconDefault}
        />);
    };

    render() {
        const { images } = this.state;

        return(<Grid 
            data={images}
            renderItem={this.renderItem}
            keyExtractor={keyExtractor}
        />);
    }
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
    },
});