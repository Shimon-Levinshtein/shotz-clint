import { GET_LIST_YAHRZEIT } from "./listYahrzeits.action";

const defaultState = null;

const variable = (state = defaultState, action) => {
    switch (action.type) {
        case GET_LIST_YAHRZEIT:
            return action.payload;
        default:
            return state;

    }
}

export default variable;