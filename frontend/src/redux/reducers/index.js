import { combineReducers } from 'redux';
import { productListReducer, productDetailReducer, 
    createProductReducer } from './productReducers';
import { loginReducer, registerReducer} from './userReducers';

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