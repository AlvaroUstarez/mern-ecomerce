import { combineReducers } from 'redux';
import { productListReducer } from './productReducers';
import { loginReducer,registerReducer } from './userReducers';

const reducer = combineReducers({
    productList: productListReducer,
    userLogger: loginReducer,
    userRegister: registerReducer
});

export default reducer;