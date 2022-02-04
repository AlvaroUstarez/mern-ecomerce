import { combineReducers } from 'redux';
import { productListReducer, productDetailReducer, createProductReducer} from './productReducers';


const reducer = combineReducers({
    productList: productListReducer,//renombrar
    productDetail: productDetailReducer,
    createProduct: createProductReducer,
    //updateProduct: updateProductReducer,
  //  deleteProduct: deleteProductReducer, 

});

export default reducer;