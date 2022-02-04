import { combineReducers } from 'redux';
import { productDetailReducer, createProductReducer, productListReducer } from './productReducers';
import { loginReducer, registerReducer,} from './userReducers';



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