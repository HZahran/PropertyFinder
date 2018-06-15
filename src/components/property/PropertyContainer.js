import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropertyList } from './PropertyList';
import { fetchPropertyList, sortByPrice, sortByBedrooms, nextPage, previousPage } from '../../actions';
import { View } from 'react-native';
import { PropertyListHeader } from './PropertyListHeader';

class PropertyContainer extends Component {
    componentDidMount() {
        const { fetchPropertyList } = this.props

        // Fetch the list of properties
        fetchPropertyList(0, 'pd')
    }

    render() {
        const { propertyListData, ...rest } = this.props
        return (
            <View>
                <PropertyListHeader {...rest} />
                <PropertyList data={propertyListData} />
            </View>
        )
    }
}

const mapStateToProps = ({ propertyListReducer, pageReducer }) => {
    return {
        propertyListData: propertyListReducer.propertyListData,
        currentPage: pageReducer.currentPage
    }
}

const mapDispatchToProps = {
    fetchPropertyList,
    sortByPrice,
    sortByBedrooms,
    nextPage,
    previousPage
}

PropertyContainer = connect(mapStateToProps, mapDispatchToProps)(PropertyContainer);

export default PropertyContainer