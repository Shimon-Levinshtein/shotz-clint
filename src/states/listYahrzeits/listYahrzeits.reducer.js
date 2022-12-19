import { ADD_TO_LIST_YAHRZEIT, DELETE_FROM_LIST_YAHRZEIT, EDIT_TO_LIST_YAHRZEIT, GET_LIST_YAHRZEIT } from "./listYahrzeits.action";

const defaultState = null;

const variable = (state = defaultState, action) => {
    switch (action.type) {
        case GET_LIST_YAHRZEIT:
            return action.payload;
        case ADD_TO_LIST_YAHRZEIT:
            const mewState = [...state];
            mewState.push(action.payload.data);
            return mewState;
        case EDIT_TO_LIST_YAHRZEIT:
            const mewStateA = state.map(item => {
                if (item.id === action.payload?.data?.id) {
                    return action.payload?.data;
                } else {
                    return item;
                };
            });
            return mewStateA;
        case DELETE_FROM_LIST_YAHRZEIT:
            return state.filter(i => i.id !== action.payload);
        default:
            return state;

    }
}

export default variable;