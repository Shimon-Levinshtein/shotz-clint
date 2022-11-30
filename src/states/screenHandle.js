import { CLOSE_SCREEN, OPEN_SCREEN } from "../actions/screenHandle";

const defaultState = {
    spinner: false,
    spinnerData: '',
    errorMessage: false,
    errorMessageData: {
        text: '',
    },
};

const variable = (state = defaultState, action) => {
    switch (action.type) {
        case OPEN_SCREEN:
            const newState = {...state};
            newState[action.payload.screenName] = true;
            newState[action.payload.screenDataName] = action.payload.screenData;
            return newState;
        case CLOSE_SCREEN:
            const newStateB = {...state};
            newStateB[action.payload.screenName] = false;
            newStateB[action.payload.screenDataName] = defaultState[action.payload.screenDataName];
            return newStateB;
        default:
            return state;

    }
}

export default variable;