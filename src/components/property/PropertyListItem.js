import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { COLORS } from '../../resources/constants';
import { Card } from '../common';

const PropertyListItem = (props) => {
    const { id, title, subject, thumbnail, price, currency, location, selectPropertyItem } = props
    const { containerStyle, titleStyle, subjectStyle, thumbnailStyle, priceStyle, locationStyle } = styles;

    return (
        <Card key={'List Item' + id}
            customStyle={containerStyle}
            handlePress={selectPropertyItem}>
            <Text style={titleStyle}>
                {title}
            </Text>
            <Text style={subjectStyle}>
                {subject}
            </Text>
            <Image style={thumbnailStyle} source={{ uri: thumbnail }} />
            <Text style={priceStyle}>
                {`${currency} ${price}`}
            </Text>
            <Text style={locationStyle}>
                {location}
            </Text>
        </Card>
    )
};


const styles = StyleSheet.create({
    containerStyle: {
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
    },
    titleStyle: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 5,
        marginBottom: 5,
    },
    subjectStyle: {
        textAlign: 'center',
        marginBottom: 10,
    },
    thumbnailStyle: {
        width: 300,
        height: 300
    },
    priceStyle: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 5,
        marginBottom: 5,
    },
    locationStyle: {
        textAlign: 'center',

    }

});

export { PropertyListItem };

