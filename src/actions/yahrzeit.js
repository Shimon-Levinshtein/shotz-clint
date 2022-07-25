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
export const createEventByType = (obj, navigate) => {
    return async (dispatch) => {
        dispatch({ type: CHANGE_STATUS_POPUP, payload: { type: "Loading", yesOrNo: true } });
        authAxios().post(`/events/create-event-by-type`, {
            data: obj
        })
            .then((response) => {
                dispatch({ type: CREATE_EVETE_BY_TY, payload: response.data });
                dispatch({ type: CHANGE_STATUS_POPUP, payload: { type: "Loading", yesOrNo: false } });
                dispatch({
                    type: CHANGE_STATUS_POPUP,
                    payload: {
                        type: 'PopupSucceeded',
                        yesOrNo: true,
                        typeText: 'PopupSucceededData',
                        text: {
                            title: 'Awesome!',
                            message: 'Your event has been saved successfully, you can check all your Evnts on the "My Events" page.',
                            buttonText: 'OK',
                        },
                    }
                });
                navigate('/my-events');

            })
            .catch(error => {
                console.log(error);
                dispatch({ type: CHANGE_STATUS_POPUP, payload: { type: "Loading", yesOrNo: false } });
                dispatch({
                    type: CHANGE_STATUS_POPUP,
                    payload: {
                        type: 'ErrorMessage',
                        yesOrNo: true,
                        typeText: 'ErrorMessageText',
                        text: {
                            message: error.response.data.error,
                            status: error.response.status,
                        },
                    }
                });
            });
    }
};
