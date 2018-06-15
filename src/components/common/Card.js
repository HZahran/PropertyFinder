import React from 'react';
import { View, StyleSheet } from 'react-native';
import { COLORS } from '../../resources/constants';

const Card = ({ children, customStyle }) => {
    const { viewStyle } = styles;

    return (
        <View style={[viewStyle, customStyle]}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: COLORS.WHITE_GREY,
        width: 300,
        elevation: 2,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 20,
    },
});

export { Card };