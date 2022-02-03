import actionTypes from "./actionTypes";
import { getProducts} from '../../services/productServices';


export const listProducts = (keyword= '', pageNumber = '')=>{
    return async (dispatch) => {
        try{
            dispatch({type : actionTypes.PRODUCT_LIST_REQUEST});
            const data = await getProducts(keyword, pageNumber);//toma de servicios
            dispatch({
                type: actionTypes.PRODUCT_LIST_SUCCESS,
                payload : data,//se asigna lo q dev del servicio
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