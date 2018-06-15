import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { COLORS } from '../../resources/constants';
import { Card } from '../common';

const PropertyListItem = ({ title }) => {
    const { containerStyle, titleStyle } = styles;

    return (
        <Card customStyle={containerStyle}>
            <Text style={titleStyle}>
                {title}
            </Text>
        </Card>
    )
};


const styles = StyleSheet.create({
    containerStyle: {
    },
    titleStyle: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    }
});

export { PropertyListItem };

