

import React from 'react';
import { Text, StyleSheet, TouchableHighlight } from 'react-native';
import { COLORS } from '../../resources/constants';

const Button = ({ text, handlePress }) => {
    const { buttonStyle, textStyle } = styles;

    return (
        <TouchableHighlight
            style={buttonStyle}
            onPress={() => handlePress()}>
            <Text style={textStyle}>
                {text}
            </Text>
        </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: COLORS.WHITE_GREY,
        elevation: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
    },
    textStyle: {

    }
});

export { Button };