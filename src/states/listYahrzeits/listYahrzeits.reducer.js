// import { CHANGE_LOCATION } from "../actions/locationHeandler";

const defaultState = null;

const variable = (state = defaultState, action) => {
    switch (action.type) {
        // case CHANGE_LOCATION:
        //     return action.payload;
        default:
            return state;

    }
}

export default variable;