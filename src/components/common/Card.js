import React from 'react';
import {View, StyleSheet } from 'react-native';

const Card = ({ children }) => {
    const { viewStyle } = styles;

    return (
        <View style={viewStyle}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        shadowOpacity: 0.2,
        elevation: 1,
    },
});

export { Card };