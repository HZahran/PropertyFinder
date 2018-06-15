import { SORT_BY } from '../actions/types';
import { SORTING } from '../resources/constants';

const INITIAL_STATE = {
    sortedBy: SORTING.PRICE_ASC
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SORT_BY:
            return { ...state, sortedBy: action.payload }
        default:
            return state
    }
}