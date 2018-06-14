import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

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
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        shadowOpacity: 0.2,
        elevation: 3,
    },
    textStyle: {
        fontSize: 22,
    }
});

export { Header };