export const LOGIN_USER = 'authentication';


export const login = data => {
    return async (dispatch) => {
        dispatch({ type: authentication, payload: data});
    }
};
