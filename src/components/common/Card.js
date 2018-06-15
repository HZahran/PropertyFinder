import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../../resources/constants';

const Card = ({ children, customStyle, handlePress }) => {
    const { viewStyle } = styles;

    return (
        <TouchableOpacity
            style={[viewStyle, customStyle]}
            onPress={handlePress}>
            {children}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: COLORS.WHITE_GREY,
        width: 350,
        elevation: 2,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 20,
    },
});

export { Card };