export const SET_TIME_STATE = 'SET_TIME_STATE';

export const setTimeState = date => {
    return async (dispatch) => {
        dispatch({ type: SET_TIME_STATE, payload: date });
    };
};
