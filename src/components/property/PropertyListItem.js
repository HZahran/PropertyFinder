import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { COLORS } from '../../resources/constants';
import { Card } from '../common';

const PropertyListItem = ({ id, title, subject, thumbnail, price, currency, location }) => {
    const { containerStyle, titleStyle, subjectStyle, thumbnailStyle, priceStyle, locationStyle } = styles;

    return (
        <Card key={id} customStyle={containerStyle}>
            <Text style={titleStyle}>
                {title}
            </Text>
            <Text style={subjectStyle}>
                {subject}
            </Text>
            <Image style={thumbnailStyle} source={{ uri: thumbnail }} />
            <Text style={priceStyle}>
                {currency + price}
            </Text>
            <Text style={locationStyle}>
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
    },
    subjectStyle: {

    },
    thumbnailStyle: {
        width: 300,
        height: 300
    },
    priceStyle: {

    },
    locationStyle: {

    }

});

export { PropertyListItem };

