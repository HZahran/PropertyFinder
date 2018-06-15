import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import { Button, CustomListView } from '../common';
import { PropertyListItem } from './PropertyListItem';

const PropertyListHeader = ({ sortByPrice, sortByBedrooms, sortedBy, nextPage, previousPage, currentPage }) => {
    const { containerStyle } = styles;

    return (
        <View style={containerStyle}>
            <Button text={'Previous'} handlePress={previousPage} />
            <Button text={'Next'} handlePress={nextPage} />
            <Button text={'Price'} handlePress={sortByPrice} />
            <Button text={'Bedrooms'} handlePress={sortByBedrooms} />
        </View>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        flexDirection: 'row',
    },
});

export { PropertyListHeader };