import { SELECT_PROPERTY_ITEM, PRESS_BACK_BUTTON } from '../actions/types';

const INITIAL_STATE = {
    selectedIndex: -1
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SELECT_PROPERTY_ITEM:
            return { ...state, selectedIndex: action.payload }
        case PRESS_BACK_BUTTON:
            return { ...state, selectedIndex: -1 }
        default:
            return state
    }
}



