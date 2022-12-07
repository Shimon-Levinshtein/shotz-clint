import { ADD_TO_LIST_YAHRZEIT, DELETE_FROM_LIST_YAHRZEIT, GET_LIST_YAHRZEIT } from "./listYahrzeits.action";

const defaultState = null;

const variable = (state = defaultState, action) => {
    switch (action.type) {
        case GET_LIST_YAHRZEIT:
            return action.payload;
        case ADD_TO_LIST_YAHRZEIT:
            const mewState = [...state];
            console.log(action.payload);
            mewState[action.payload.id] = action.payload.data;
            return mewState;
        case DELETE_FROM_LIST_YAHRZEIT:
            return state.filter(i => i.id !== action.payload);
        default:
            return state;

    }
}

export default variable;