import { combineReducers } from 'redux';
import location from './location';
import date from './date';
import user from './user';
import screenHandle from './screenHandle';


export default combineReducers({
    location: location,
    date: date,
    user: user,
    screenHandle: screenHandle,
});