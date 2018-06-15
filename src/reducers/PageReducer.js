import { NEXT_PAGE, PREVIOUS_PAGE } from '../actions/types';

const INITIAL_STATE = {
    currentPage: 0
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case NEXT_PAGE:
            return { ...state, currentPage: action.payload }
        case PREVIOUS_PAGE:
            return { ...state, currentPage: action.payload }
        default:
            return state
    }
}