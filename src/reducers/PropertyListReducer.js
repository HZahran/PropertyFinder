import { FETCH_PROPERTY_LIST, FETCH_PROPERTY_LIST_SUCCESS, SELECT_PROPERTY_ITEM, PRESS_BACK_BUTTON } from '../actions/types';

const INITIAL_STATE = {
    isLoading: false,
    propertyListData: [],
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_PROPERTY_LIST:
            return { ...state, isLoading: true }
        case FETCH_PROPERTY_LIST_SUCCESS:
            return { ...state, propertyListData: action.payload, isLoading: false }
        default:
            return state
    }
}