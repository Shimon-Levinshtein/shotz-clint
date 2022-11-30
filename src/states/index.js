import { combineReducers } from 'redux';
import location from './location';
import date from './date';
import user from './user';
import screenHandle from './screenHandle';
import listYahrzeits from './listYahrzeits/listYahrzeits.reducer';


export default combineReducers({
    location,
    date,
    user,
    screenHandle,
    listYahrzeits,
});