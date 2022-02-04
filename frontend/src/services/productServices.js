import axios from 'axios';
import {BASE_URL_BACK} from '../config';

export const getProducts = async (keyword, pageNumber) => {
    try {
        const { data } = await axios.get(
            ` ${BASE_URL_BACK}/products?keywords=${keyword}&pageNumber=${pageNumber}`
        );
        return data;
    }catch(error){
        throw error;
    }
};

export const getProduct = async (id) => {
    try {
        const { data } = await axios.get(
            ` ${BASE_URL_BACK}/products/${id}`
        );
        return data;
    }catch(error){
        throw error;
    }
};
 
export const createProductReview = async (productId, review, userInfo) => {
    const config = {
        headers:{
          'Content-type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
    };
    try{
        const {data} = await axios.post(
            `${BASE_URL_BACK}/products/${productId}/reviews`, 
            review, 
            config
        );
        return data;
    }catch(error){
        throw error;
    }
};