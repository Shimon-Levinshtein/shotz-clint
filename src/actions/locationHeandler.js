export const CHANGE_LOCATION = 'CHANGE_LOCATION';


export const changeLocation = locationData => {
    return async (dispatch) => {
        dispatch({ type: CHANGE_LOCATION, payload: locationData});
    }
};
