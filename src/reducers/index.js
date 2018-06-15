import { combineReducers } from 'redux';
import PropertyListReducer from "./PropertyReducer";

export default combineReducers({
    propertyListReducer: PropertyListReducer
})