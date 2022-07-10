import { combineReducers } from 'redux';
import location from './location';
import date from './date';


export default combineReducers({
    location: location,
    date: date,
});