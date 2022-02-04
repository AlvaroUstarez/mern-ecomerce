import actionTypes from '../actions/actionTypes';

export const productListReducer =(state = { products: [] }, action ) =>{
    switch (action.type) {
        case actionTypes.PRODUCT_LIST_REQUEST:
            return { loading: true, products: [] };
        case actionTypes.PRODUCT_LIST_SUCCESS:
            return {
                loading: false,
                products:action.payload.products,
                pages: action.payload.pages,
                page: action.payload.page,
            };
        case actionTypes.PRODUCT_LIST_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
};
export const productDetailReducer =(state = { product: {}}, action ) =>{
    switch (action.type) {
        case actionTypes.PRODUCT_REQUEST:
            return { loading: true, product:{}};
        case actionTypes.PRODUCT_SUCCESS:
            return {
                loading: false,
                product:action.payload,
            };
        case actionTypes.PRODUCT_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
};

export const createProductReducer =(state = {}, action ) =>{
    switch (action.type) {
        case actionTypes.CREATE_PRODUCT_REQUEST:
            return { loading: true};
        case actionTypes.CREATE_PRODUCT_SUCCESS:
            return {
                loading: false,
                success:true,
                product:action.payload,
            };
        case actionTypes.CREATE_PRODUCT_FAIL:
            return {loading: false, error: action.payload};
        case actionTypes.CREATE_PRODUCT_RESET:
            return {};
        default:
            return state;
    }
};

export const updateProductReducer =(state = { product: {} }, action ) =>{
    switch (action.type) {
        case actionTypes.UPDATE_PRODUCT_REQUEST:
            return { loading: true};
        case actionTypes.UPDATE_PRODUCT_SUCCESS:
            return {
                loading: false, success: true, product: action.payload 
            };
        case actionTypes.UPDATE_PRODUCT_FAIL:
            return {loading: false, error: action.payload};
            case actionTypes.UPDATE_PRODUCT_RESET:
                return { product: {} };
        default:
            return state;
    }
};

export const deleteProductReducer =(state = {}, action ) =>{
    switch (action.type) {
        case actionTypes.DELETE_PRODUCT_REQUEST:
            return { loading: true};
        case actionTypes.DELETE_PRODUCT_SUCCESS:
            return {
                loading: false,
                success:true,
            };
        case actionTypes.DELETE_PRODUCT_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
};

export const productUploadImageReducer = (state = {}, action) => {
    switch (action.type) {
      case actionTypes.PRODUCT_UPLOAD_IMAGE_REQUEST:
        return { loading: true };
      case actionTypes.PRODUCT_UPLOAD_IMAGE_SUCCESS:
        return { loading: false, success: true, productImage: action.payload };
      case actionTypes.PRODUCT_UPLOAD_IMAGE_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

