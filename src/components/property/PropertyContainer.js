import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropertyList from './PropertyList';

const mapStateToProps = (state) => {
    return {
        data: state.propertyListData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const PropertyContainer = connect(mapStateToProps, mapDispatchToProps)(PropertyList);
export { PropertyContainer }