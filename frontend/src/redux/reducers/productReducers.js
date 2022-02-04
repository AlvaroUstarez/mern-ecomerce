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

export const createProductReducer =(state = { product: {}}, action ) =>{
    switch (action.type) {
        case actionTypes.CREATE_PRODUCT_REQUEST:
            return { loading: true, product:{}};
        case actionTypes.CREATE_PRODUCT_SUCCESS:
            return {
                loading: false,
                product:action.payload,
            };
        case actionTypes.CREATE_PRODUCT_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
};

/*export const updateProductReducer =(state = { product: {}}, action ) =>{
    switch (action.type) {
        case actionTypes.UPDATE_PRODUCT_REQUEST:
            return { loading: true, product:{}};
        case actionTypes.UPDATE_PRODUCT_SUCCESS:
            return {
                loading: false,
                product:action.payload,
            };
        case actionTypes.UPDATE_PRODUCT_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
};

export const deleteProductReducer =(state = { product: {}}, action ) =>{
    switch (action.type) {
        case actionTypes.DELETE_PRODUCT_REQUEST:
            return { loading: true, product:{}};
        case actionTypes.DELETE_PRODUCT_SUCCESS:
            return {
                loading: false,
                //PREGUNTAR COMO MANDAR MENSAJE 
                //product:action.payload,
            };
        case actionTypes.DELETE_PRODUCT_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
};*/


