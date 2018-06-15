import { FETCH_PROPERTY_LIST } from '../actions/types';

const INITIAL_STATE = {
    propertyListData: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_PROPERTY_LIST:
            return { ...state, propertyListData: action.payload.data }
    }
}