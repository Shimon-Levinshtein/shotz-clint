
const defaultState = {
    locationName: 'בני ברק',
    latitude: '32.074663',
    longitude: '34.841100',
};

const variable = (state = defaultState, action) => {
    switch (action.type) {
        // case CHANGE_QR_CODE:
        //     const newState = { ...state };
        //     newState.requestQrCode = false;
        //     newState.qrCode = action.payload;
        //     return newState;

        default:
            return state;

    }
}

export default variable;