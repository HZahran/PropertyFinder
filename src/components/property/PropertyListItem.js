import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { COLORS } from '../../resources/constants';
import { Card } from '../common';

const PropertyListItem = ({ id, title, subject, thumbnail, price, location }) => {
    const { containerStyle, titleStyle } = styles;
    return (
        <Card key={id} customStyle={containerStyle}>
            <Text style={titleStyle}>
                {title}
            </Text>
            <Text style={titleStyle}>
                {subject}
            </Text>
            <Image source={{ uri: thumbnail }} />
            <Text style={titleStyle}>
                {price}
            </Text>
            <Text style={titleStyle}>
                {location}
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

