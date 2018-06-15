import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { COLORS } from '../../resources/constants';
import { Card, Button } from '../common';

const PropertyDetails = ({ id, title, subject, thumbnail, price, currency, location, backButtonPress }) => {
    const { containerStyle, titleStyle, subjectStyle, thumbnailStyle, priceStyle, locationStyle } = styles;

    return (
        <View>
            <Button text={'Back'} handlePress={backButtonPress} />
            <Card key={id}
                customStyle={containerStyle}>
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
        </View>
    )
};


const styles = StyleSheet.create({
    containerStyle: {
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
    },
    textStyle: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 5,
        marginBottom: 5,
    },
    thumbnailStyle: {
        width: 300,
        height: 300
    },
});

export { PropertyDetails };

