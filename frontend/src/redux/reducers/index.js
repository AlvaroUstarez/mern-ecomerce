import { combineReducers } from 'redux';
import { productListReducer } from './productReducers';
import { loginReducer } from './userReducers';

const reducer = combineReducers({
    productList: productListReducer,
    userLogger: loginReducer,
});

export default reducer;