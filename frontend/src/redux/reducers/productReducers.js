import actionTypes from '../actions/actionTypes';

export const productListReducer =(state = { products: [] }, action ) =>{//accion tipe load
    switch (action.type) {
        case actionTypes.PRODUCT_LIST_REQUEST:
            return { loading: true, products: [] };
        case actionTypes.PRODUCT_LIST_SUCCESS:
            return {
                loading: false,
                products:action.payload.products, //payload se llena con datos del servicio
                pages: action.payload.pages,
                page: action.payload.page,
            };
        case actionTypes.PRODUCT_LIST_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
};