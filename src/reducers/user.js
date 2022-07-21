import { LOGIN_OUT, LOGIN_USER } from "../actions/authentication";

const defaultState = {
    isLogin: false,
    firebaseData: null,
    email: '',
    name: '',
    permissions: '',
};

const variable = (state = defaultState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            const newState = {...state};
            newState.isLogin = true;
            newState.firebaseData = action.payload;
            newState.email = action.payload?.user?.email;
            return newState;
        case LOGIN_OUT:
            return defaultState;
        default:
            return state;

    }
}

export default variable;