import { Dimensions, FlatList, PixelRatio, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import { Icon } from 'expo';
import Colors from '../constants/Colors';

export default class Grid extends React.Component {
    static propTypes = {
        renderItem: PropTypes.func.isRequired,
        numColumns: PropTypes.number,
        itemMargin: PropTypes.number,
    }

    static defaultProps = {
        numColumns: 4,
        itemMargin: 1,
    }

    renderGridItem = () => {
        //const { index } = info;
        const { numColumns, itemMargin } = this.props;
        const { width } = Dimensions.get('window');

        // const size = PixelRatio.roundToNearestPixel(
        //     ( width - itemMargin * (numColumns - 1)) / numColumns,
        // );

        // const marginLeft = index % numColumns === 0 ? 0 : itemMargin;

        // const marginTop = index < numColumns ? 0 : itemMargin;

        return (<Icon.Ionicons
            name={`ios-paw`}
            size={32}
            style={{ marginBottom: -3 }}
            color={true ? Colors.tabIconSelected : Colors.tabIconDefault}
        />);
    }

    render() {
        return <FlatList {...this.props} renderItem={this.renderGridItem} />;
    }
}