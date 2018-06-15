import { combineReducers } from 'redux';
import PropertyListReducer from "./PropertyListReducer";
import PageReducer from './PageReducer';

export default combineReducers({
    propertyListReducer: PropertyListReducer,
    pageReducer: PageReducer
})