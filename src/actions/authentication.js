export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_OUT = 'LOGIN_OUT';


export const login = data => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER, payload: data});
    }
};
export const logout = () => {
    return (dispatch) => {
        dispatch({ type: LOGIN_OUT, payload: ''});
    }
};
