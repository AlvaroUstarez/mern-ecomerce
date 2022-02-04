import actionTypes from '../actions/actionTypes';

export const loginReducer =(state = {}, action ) =>{
    switch (action.type) {
        case actionTypes.AUTH_REQUEST:
            return { loading: true};
        case actionTypes.AUTH_RECEIVE:
            return {
                loading: false,
                userAuth:action.payload,
            };
        case actionTypes.AUTH_ERROR:
            return {loading: false, error: action.payload};

        case actionTypes.AUTH_LOGOUT:
            return {};
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
                userAuth:action.payload,
            };
        case actionTypes.REGISTER_ERROR:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
};

export const userListReducer =(state = { usuarios: [] }, action ) =>{
    switch (action.type) {
        case actionTypes.USER_LIST_REQUEST:
            return { loading: true};
        case actionTypes.USER_LIST_SUCCESS:
            return {
                loading: false,usuarios:action.payload,};
        case actionTypes.USER_LIST_FAIL:
            return {loading: false, error: action.payload};
        case actionTypes.USER_LIST_RESET:
               return {usuarios: [] };
        default:
            return state;
    }
};