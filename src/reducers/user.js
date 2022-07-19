
const defaultState = {
    isLogin: false,
    email: '',
    name: '',
    permissions: '',
};

const variable = (state = defaultState, action) => {
    switch (action.type) {
        case 'xxxxxx':
            return action.payload;
        default:
            return state;

    }
}

export default variable;