import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropertyList } from './PropertyList';
import { fetchPropertyList } from '../../actions';
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

const mapStateToProps = ({ propertyListReducer, pageReducer }) => {
    return {
        propertyListData: propertyListReducer.propertyListData,
        currentPage: pageReducer.currentPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPropertyList: (page, order) => dispatch(fetchPropertyList(page, order))
    }
}

PropertyContainer = connect(mapStateToProps, mapDispatchToProps)(PropertyContainer);

export default PropertyContainer