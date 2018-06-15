import { FETCH_PROPERTY_LIST, FETCH_PROPERTY_LIST_SUCCESS, SORT_BY, NEXT_PAGE, PREVIOUS_PAGE } from './types';
import api from '../utils/api';
import { SORTING } from '../resources/constants';

export const fetchPropertyList = (page, order) => {
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

        // Toggle sorting with price
        let newSortedBy = sortedBy === SORTING.PRICE_ASC ? SORTING.PRICE_DESC : SORTING.PRICE_ASC

        // Dispatch the sorting action
        dispatch({
            type: SORT_BY,
            payload: newSortedBy
        })

        // Fetch the new sorted list
        dispatch(fetchPropertyList(currentPage, newSortedBy))
    }
}

export const sortByBedrooms = () => {
    return (dispatch, getState) => {
        const { currentPage } = getState().pageReducer
        const { sortedBy } = getState().sortReducer

        let newSortedBy = sortedBy === SORTING.BEDROOMS_ASC ? SORTING.BEDROOMS_DESC : SORTING.BEDROOMS_ASC

        // Dispatch the sorting action
        dispatch({
            type: SORT_BY,
            payload: newSortedBy
        })

        // Fetch the new sorted list
        dispatch(fetchPropertyList(currentPage, newSortedBy))
    }
}

export const nextPage = () => {
    return (dispatch, getState) => {
        const { currentPage } = getState().pageReducer
        const { sortedBy } = getState().sortReducer

        let newPage = Math.min(currentPage + 1, 2000)

        // Dispatch the sorting action
        dispatch({ type: NEXT_PAGE, payload: newPage })

        // Fetch the new sorted list
        dispatch(fetchPropertyList(newPage, sortedBy))
    }
}

export const previousPage = () => {
    return (dispatch, getState) => {
        const { currentPage } = getState().pageReducer
        const { sortedBy } = getState().sortReducer

        let newPage = Math.max(currentPage - 1, 0)

        // Dispatch the sorting action
        dispatch({ type: PREVIOUS_PAGE, payload: newPage })

        // Fetch the new sorted list
        dispatch(fetchPropertyList(newPage, sortedBy))
    }
}