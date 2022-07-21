export const OPEN_SCREEN = 'OPEN_SCREEN';
export const CLOSE_SCREEN = 'CLOSE_SCREEN';


export const openScreen = data => {
    return async (dispatch) => {
        dispatch({ type: OPEN_SCREEN, payload: data});
    }
};
export const closeScreen = data => {
    return async (dispatch) => {
        dispatch({ type: CLOSE_SCREEN, payload: data});
    }
};
