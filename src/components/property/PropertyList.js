import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { COLORS, HEADER_HEIGHT } from '../../resources/constants';
import { CustomListView } from '../common';
import { PropertyListItem } from './PropertyListItem';

const PropertyList = ({ data }) => {
    const { textStyle, viewStyle } = styles;

    return (
        <CustomListView data={data} listItemView={PropertyListItem} />
    );
};

const styles = StyleSheet.create({

});

export { PropertyList };