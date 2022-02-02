import actionTypes from '../actions/actionTypes';

export const loginReducer =(state = { user: {} }, action ) =>{
    switch (action.type) {
        case actionTypes.AUTH_REQUEST:
            return { loading: true, user: {} };
        case actionTypes.AUTH_RECEIVE:
            return {
                loading: false,
                products:action.payload,
            };
        case actionTypes.AUTH_ERROR:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
};

export const registerReducer =(state = { user: {} }, action ) =>{
    switch (action.type) {
        case actionTypes.REGISTER_REQUEST:
            return { loading: true, user: {} };
        case actionTypes.REGISTER_RECEIVE:
            return {
                loading: false,
                products:action.payload,
            };
        case actionTypes.REGISTER_ERROR:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
};