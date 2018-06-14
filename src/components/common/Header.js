import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { COLORS, HEADER_HEIGHT } from '../../resources/constants';

const Header = ({ title }) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: COLORS.WHITE_GREY,
        justifyContent: 'center',
        alignItems: 'center',
        height: HEADER_HEIGHT,
        shadowOpacity: 0.2,
        elevation: 3,
    },
    textStyle: {
        fontSize: 22,
    }
});

export { Header };