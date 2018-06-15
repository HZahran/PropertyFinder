import { FETCH_PROPERTY_LIST, FETCH_PROPERTY_LIST_SUCCESS } from './types';
import api from '../utils/api';
import { SORTING } from '../resources/constants';

export const fetchPropertyList = ({ page, order }) => {
    return (dispatch) => {
        dispatch({ type: FETCH_PROPERTY_LIST })
        api.fetchPropertyList(page, order)
            .then(({ data }) => {
                dispatch({
                    type: FETCH_PROPERTY_LIST_SUCCESS,
                    payload: data.res
                })
            })
    }
}

export const sortByPrice = () => {
    return (dispatch, getState) => {
        const { currentPage } = getState().pageReducer
        const { sortedBy } = getState().sortReducer

        let newSortedBy = sortedBy === SORTING.PRICE_ASC ? SORTING.PRICE_DESC : SORTING.PRICE_ASC
        fetchPropertyList(currentPage, newSortedBy)
    }
}

export const sortByBedrooms = () => {
    return (dispatch, getState) => {
        const { currentPage } = getState().pageReducer
        const { sortedBy } = getState().sortReducer

        let newSortedBy = sortedBy === SORTING.BEDROOMS_ASC ? SORTING.BEDROOMS_DESC : SORTING.BEDROOMS_ASC
        fetchPropertyList(currentPage, newSortedBy)
    }
}
