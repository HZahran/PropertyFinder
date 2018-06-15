import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropertyList } from './PropertyList';
import { fetchPropertyList } from '../../actions';
import mockData from '../../../__mocks__/property-list.json'
import { View } from 'react-native';

class PropertyContainer extends Component {
    componentDidMount() {
        const { fetchPropertyList } = this.props

        // Fetch the list of properties
        fetchPropertyList(0, 'pd')
    }

    render() {
        const { propertyListData } = this.props
        return (
            <PropertyList data={propertyListData} />
        )
    }
}

const mapStateToProps = ({ propertyListReducer }) => {
    return {
        propertyListData: propertyListReducer.propertyListData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPropertyList: (page, order) => dispatch(fetchPropertyList(page, order))
    }
}

PropertyContainer = connect(mapStateToProps, mapDispatchToProps)(PropertyContainer);

export default PropertyContainer