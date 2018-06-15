import { FETCH_PROPERTY_LIST, FETCH_PROPERTY_LIST_SUCCESS } from './types';
import api from '../utils/api';

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