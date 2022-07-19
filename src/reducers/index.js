import { combineReducers } from 'redux';
import location from './location';
import date from './date';
import user from './user';


export default combineReducers({
    location: location,
    date: date,
    user: user,
});