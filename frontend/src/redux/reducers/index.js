import { combineReducers } from 'redux';
import { productListReducer, productDetailReducer } from './productReducers';


const reducer = combineReducers({
    productList: productListReducer,//renombrar
    productDetail: productDetailReducer,
});

export default reducer;