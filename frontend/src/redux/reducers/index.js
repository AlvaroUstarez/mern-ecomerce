import { combineReducers } from 'redux';
import { productListReducer } from './productReducers';
import { loginReducer, registerReducer, productDetailReducer, createProductReducer, productListReducer} from './userReducers';

const reducer = combineReducers({
    productList: productListReducer,
    userLogger: loginReducer,
    userRegister: registerReducer,
    productDetail: productDetailReducer,
    createProduct: createProductReducer,
    //updateProduct: updateProductReducer,
    //  deleteProduct: deleteProductReducer
});

export default reducer;