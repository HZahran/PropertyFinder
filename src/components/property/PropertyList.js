import React from 'react';
import { StyleSheet } from 'react-native';
import { CustomListView } from '../common';
import { PropertyListItem } from './PropertyListItem';

const PropertyList = ({ data }) => {
    return (
        <CustomListView data={data} listItemView={PropertyListItem} />
    );
};

const styles = StyleSheet.create({

});

export { PropertyList };