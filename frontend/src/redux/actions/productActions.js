import actionTypes from "./actionTypes";
// import { logout } from './userActions';
import { getProducts, getProduct, createProduct,
    updateProduct, deleteProduct, upload} from '../../services/productServices';
import { logout } from './loginActions';


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

export const createProductReview = (productId, review)=>{
    return async (dispatch, getState) => {
        try{
            dispatch({
                type: actionTypes.PRODUCT_CREATE_REVIEW_REQUEST,
              });
              const {userLogin: {userInfo}} = getState();
              await createProductReview(productId, review, userInfo);
              dispatch({
                  type: actionTypes.PRODUCT_CREATE_REVIEW_SUCCESS,
              });
        }catch(error){
            const message = error.response && error.response.data.message
            ? error.response.data.message
            :error.message;
            // if(message === 'Not authorized, token failed'){
            //     dispatch(logout());
            // }
            dispatch({
                type: actionTypes.PRODUCT_CREATE_REVIEW_FAIL,
                payload: message,
            });
        }
    };
};




export const createProductAction = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: actionTypes.CREATE_PRODUCT_REQUEST,
      });
      const {
        userLogger: { userAuth },
      } = getState();
      const data = await createProduct(userAuth);
      dispatch({
        type: actionTypes.CREATE_PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === 'Not authorized, token failed') {
        dispatch(logout());
      }
      dispatch({
        type: actionTypes.CREATE_PRODUCT_FAIL,
        payload: message,
      });
    }
  };
};
export const updateProductAction = (product) => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: actionTypes.UPDATE_PRODUCT_REQUEST,
      });
      const {
        userLogger: { userAuth },
      } = getState();
      const data = await updateProduct(product, userAuth);
      dispatch({
        type: actionTypes.UPDATE_PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === 'Not authorized, token failed') {
        dispatch(logout());
      }
      dispatch({
        type: actionTypes.UPDATE_PRODUCT_FAIL,
        payload: message,
      });
    }
  };
};

export const deleteProductAction = (id)=>{
    return async (dispatch, getState) => {
        try {
          dispatch({
            type: actionTypes.DELETE_PRODUCT_REQUEST,
          });
          const { 
            userLogger: { userAuth },
          } = getState();
          await deleteProduct(id, userAuth);
          dispatch({
            type: actionTypes.DELETE_PRODUCT_SUCCESS,
          });
        } catch (error) {
          const message =
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message;
          if (message === 'Not authorized, token failed') {
            dispatch(logout());
          }
          dispatch({
            type: actionTypes.DELETE_PRODUCT_FAIL,
            payload: message,
          });
        }
      };
};
export const uploadImageAction = (image) => {
    return async (dispatch, getState) => {
      try {
        dispatch({
          type: actionTypes.PRODUCT_UPLOAD_IMAGE_REQUEST,
        });
        const {
          userLogger: { userAuth },
        } = getState();
        const data = await upload(image, userAuth);
        dispatch({
          type: actionTypes.PRODUCT_UPLOAD_IMAGE_SUCCESS,
          payload: data,
        });
      } catch (error) {
        dispatch({
          type: actionTypes.PRODUCT_UPLOAD_IMAGE_FAIL,
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        });
      }
    };
  };
  