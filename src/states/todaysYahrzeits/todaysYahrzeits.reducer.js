import { SET_LIST_YAHRZEIT_TO_DAY } from "./todaysYahrzeits.action";

const defaultState = null;

const variable = (state = defaultState, action) => {
    switch (action.type) {
        case SET_LIST_YAHRZEIT_TO_DAY:
            return action.payload;
       
        default:
            return state;

    }
}

export default variable;