import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPropertyList, sortByPrice, sortByBedrooms, nextPage, previousPage, selectPropertyItem, backButtonPress } from '../../actions';
import { View, StyleSheet } from 'react-native';
import { PropertyHome, PropertyDetails } from './index';
// import { PropertyRouter } from '../../config/routes';

class PropertyContainer extends Component {

    componentDidMount() {
        const { fetchPropertyList } = this.props

        // Fetch the list of properties
        fetchPropertyList(0, 'pd')
    }

    render() {
        const { propertyListData, backButtonPress, selectedIndex, selectPropertyItem } = this.props

        newListData = propertyListData.map((row, index) => ({ ...row, selectPropertyItem: selectPropertyItem(index) }))

        if (selectedIndex === -1)
            return <PropertyHome {...this.props} propertyListData={newListData} />
        else
            return <PropertyDetails {...newListData[selectedIndex]} backButtonPress={backButtonPress} />
        // <PropertyRouter screenProps={this.props} />
    }
}

const mapStateToProps = ({ propertyListReducer, pageReducer, sortReducer, selectionReducer }) => {
    return {
        propertyListData: propertyListReducer.propertyListData,
        selectedIndex: selectionReducer.selectedIndex,
        currentPage: pageReducer.currentPage,
        sortedBy: sortReducer.sortedBy
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPropertyList: (page, order) => dispatch(fetchPropertyList(page, order)),
        sortByPrice: () => dispatch(sortByPrice()),
        sortByBedrooms: () => dispatch(sortByBedrooms()),
        nextPage: () => dispatch(nextPage()),
        previousPage: () => dispatch(previousPage()),
        selectPropertyItem: (selectedIndex) => () => dispatch(selectPropertyItem(selectedIndex)),
        backButtonPress: () => dispatch(backButtonPress()),
    }
}


PropertyContainer = connect(mapStateToProps, mapDispatchToProps)(PropertyContainer);

export default PropertyContainer