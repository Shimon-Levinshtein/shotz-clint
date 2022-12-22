import { SET_TIME_STATE } from "./data.action";

const defaultState = {
    // date: new Date('Wed Dec 08 2224 12:13:14 GMT+0200 (Israel Standard Time)'),
    date: new Date(),
};

const variable = (state = defaultState, action) => {
    switch (action.type) {
        case SET_TIME_STATE:
            return { ...state, date: action.payload };
        default:
            return state;

    }
}

export default variable;