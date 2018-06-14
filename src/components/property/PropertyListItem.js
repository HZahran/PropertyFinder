import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { COLORS } from '../../resources/constants';

const PropertyListItem = ({ title }) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View>
            <Text>
                {title}
            </Text>
        </View>
    )
};


const styles = StyleSheet.create({

});

export { PropertyListItem };

