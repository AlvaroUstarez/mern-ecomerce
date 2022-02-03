import { combineReducers } from 'redux';
import { productListReducer } from './productReducers';
import { loginReducer } from './userReducers';
import { registerReducer } from './userReducers';

const reducer = combineReducers({
    productList: productListReducer,//todos los datos backend
    userLogger: loginReducer,
    userRegister: registerReducer
});

export default reducer;