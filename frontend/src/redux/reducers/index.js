import { combineReducers } from 'redux';
import { productDetailReducer, createProductReducer, productListReducer } from './productReducers';
import { loginReducer, registerReducer,userListReducer} from './userReducers';


const reducer = combineReducers({
    productList: productListReducer,
    userLogger: loginReducer, 
    userRegister: registerReducer,
    userList:userListReducer,
    productDetail: productDetailReducer,
    createProduct: createProductReducer,
    //updateProduct: updateProductReducer,
    //  deleteProduct: deleteProductReducer
});

export default reducer;