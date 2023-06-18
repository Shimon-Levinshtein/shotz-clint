import { combineReducers } from 'redux';
import location from './location';
import date from './date/date.reducer';
import user from './user';
import screenHandle from './screenHandle';
import listYahrzeits from './listYahrzeits/listYahrzeits.reducer';
import todaysYahrzeits from './todaysYahrzeits/todaysYahrzeits.reducer';


export default combineReducers({
    location,
    date,
    user,
    screenHandle,
    listYahrzeits,
    todaysYahrzeits,
});