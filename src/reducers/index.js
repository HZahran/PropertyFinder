import { combineReducers } from 'redux';
import PropertyListReducer from "./PropertyListReducer";
import PageReducer from './PageReducer';
import SortReducer from './SortReducer';

export default combineReducers({
    propertyListReducer: PropertyListReducer,
    pageReducer: PageReducer,
    sortReducer: SortReducer
})