import { combineReducers } from 'redux';
import PropertyListReducer from "./PropertyListReducer";

export default combineReducers({
    propertyListReducer: PropertyListReducer
})