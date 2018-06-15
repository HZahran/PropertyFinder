import { NEXT_PAGE, PREVIOUS_PAGE } from '../actions/types';

const INITIAL_STATE = {
    currentPage: 0
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case NEXT_PAGE:
            return { ...state, currentPage: min(state.currentPage + 1, 2000) }
        case PREVIOUS_PAGE:
            return { ...state, currentPage: max(state.currentPage - 1, 0) }
        default:
            return state
    }
}