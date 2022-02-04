import actionTypes from "./actionTypes";
import { getProducts, getProduct, createProduct,
     updateProduct, deleteProduct} from '../../services/productServices';


export const listProducts = (keyword= '', pageNumber = '')=>{
    return async (dispatch) => {
        try{
            dispatch({type : actionTypes.PRODUCT_LIST_REQUEST});
            const data = await getProducts(keyword, pageNumber);
            dispatch({
                type: actionTypes.PRODUCT_LIST_SUCCESS,
                payload : data,
            });
        }catch (error) {
            dispatch({
                type:actionTypes.PRODUCT_LIST_FAIL,
                payload:
                    error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
            });
        }
    };
};
export const getProductDetail = (id)=>{
    return async (dispatch) => {
        try{
            dispatch({type : actionTypes.PRODUCT_REQUEST});
            const data = await getProduct(id);
            dispatch({
                type: actionTypes.PRODUCT_SUCCESS,
                payload : data,
            });
        }catch (error) {
            dispatch({
                type:actionTypes.PRODUCT_FAIL,
                payload:
                    error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
            });
        }
    };
};

export const createProductAction = (name, price, image, brand, countInStock, category, description)=>{
    return async (dispatch) => {
        try{
            dispatch({type : actionTypes.CREATE_PRODUCT_REQUEST});
            const data = await createProduct(name, price, image, brand, countInStock, category, description);
            dispatch({
                type: actionTypes.CREATE_PRODUCT_SUCCESS,
                payload : data,
            });
        }catch (error) {
            dispatch({
                type:actionTypes.CREATE_PRODUCT_FAIL,
                payload:
                    error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
            });
        }
    };
};

export const updateProductAction = (body,id)=>{
    return async (dispatch) => {
        try{
            dispatch({type : actionTypes.UPDATE_PRODUCT_REQUEST});
            const data = await updateProduct(body,id);
            dispatch({
                type: actionTypes.UPDATE_PRODUCT_SUCCESS,
                payload : data,
            });
        }catch (error) {
            dispatch({
                type:actionTypes.UPDATE_PRODUCT_FAIL,
                payload:
                    error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
            });
        }
    };
};

export const deleteProductAction = (id)=>{
    return async (dispatch) => {
        try{
            dispatch({type : actionTypes.DELETE_PRODUCT_REQUEST});
            const data = await deleteProduct(id);
            dispatch({
                type: actionTypes.DELETE_PRODUCT_SUCCESS,
             
            });
        }catch (error) {
            dispatch({
                type:actionTypes.DELETE_PRODUCT_FAIL,
                payload:
                    error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
            });
        }
    };
};