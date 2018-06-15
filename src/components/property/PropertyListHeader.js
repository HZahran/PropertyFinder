import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import { Button, CustomListView } from '../common';
import { PropertyListItem } from './PropertyListItem';

const PropertyListHeader = ({ sortByPrice, sortByBedrooms, sortedBy, nextPage, previousPage, currentPage }) => {
    const { viewStyle, infoStyle, sortingStyle } = styles;

    return (
        <View>
            <View style={viewStyle}>
                <Button text={'Previous'} handlePress={previousPage} />
                <Button text={'Next'} handlePress={nextPage} />
                <View style={sortingStyle}>
                    <Button text={'Price'} handlePress={sortByPrice} />
                    <Button text={'Bedrooms'} handlePress={sortByBedrooms} />
                </View>
            </View>
            <View style={infoStyle}>
                <Text>{`Current Page: ${currentPage}`}</Text>
                <Text>{`Sorted By: ${sortedBy}`}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        flexDirection: 'row',
    },
    sortingStyle: {
        marginLeft: 30,
        flexDirection: 'row',
    },
    infoStyle: {
        alignItems: 'center',
    }

});

export { PropertyListHeader };