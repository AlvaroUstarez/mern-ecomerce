import { combineReducers } from 'redux';
import { productDetailReducer, createProductReducer,
     productListReducer, deleteProductReducer, updateProductReducer, productUploadImageReducer} from './productReducers';
import { loginReducer, registerReducer,} from './userReducers';


const reducer = combineReducers({
    productList: productListReducer,
    userLogger: loginReducer, 
    userRegister: registerReducer,
    productDetail: productDetailReducer,
    createProduct: createProductReducer,
    updateProduct: updateProductReducer,
   deleteProduct: deleteProductReducer,
   productUploadImage:productUploadImageReducer, 
});

export default reducer;