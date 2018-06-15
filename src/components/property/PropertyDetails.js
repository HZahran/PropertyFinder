import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { COLORS } from '../../resources/constants';
import { Card, Button } from '../common';

const PropertyDetails = ({ id, title, subject, thumbnail, price, currency, location, backButtonPress, agent_name, bedrooms, bathrooms }) => {
    const { containerStyle, titleStyle, subjectStyle, thumbnailStyle, priceStyle, locationStyle } = styles;

    return (
        <View>
            <Button text={'Back'} handlePress={backButtonPress} />
            <View key={id}
                style={containerStyle}>
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
                <Text style={locationStyle}>
                    {`Posted By: ${agent_name}`}
                </Text>
                <Text style={locationStyle}>
                    {`Bedrooms: ${bedrooms}`}
                </Text>
                <Text style={locationStyle}>
                    {`Bathrooms: ${bathrooms}`}
                </Text>
            </View>
        </View>
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

export { PropertyDetails };

