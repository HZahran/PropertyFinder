import React from 'react';
import { View, StyleSheet } from 'react-native';
import { PropertyListHeader } from './PropertyListHeader';
import { PropertyList } from './PropertyList';

const PropertyHome = ({ propertyListData, ...rest }) => {
    const { containerStyle } = styles;

    return (
        <View style={containerStyle}>
            <PropertyListHeader {...rest} />
            <PropertyList data={propertyListData} />
        </View>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        alignItems: 'center',
    },
})

export { PropertyHome };