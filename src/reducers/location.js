import { CHANGE_LOCATION } from "../actions/locationHeandler";

const defaultState = {
    locationName: 'בני ברק',
    latitude: '32.074663',
    longitude: '34.841100',
};

const variable = (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_LOCATION:
            return action.payload;
        default:
            return state;

    }
}

export default variable;