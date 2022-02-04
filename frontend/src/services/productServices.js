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
    };

}

export const createProduct = async (name, price, image, brand, countInStock, category, description) => {
    const body = {
        name,
        price, 
        image, 
        brand, 
        countInStock, 
        category, 
        description
    }
    try {
        const { data } = await axios.post(
            ` ${BASE_URL_BACK}/products`, body);
        console.log(data);
        return data;
    }catch(error){
        throw error;
    }
};

export const updateProduct = async (body, id) => {
    try {
        const { data } = await axios.post(
            ` ${BASE_URL_BACK}/products/${id}`, body);
        console.log(data);
    }catch(error){
        throw error;
    }
};

export const deleteProduct = async (id) => {
    try {
        const { data } = await axios.delete(
            `${BASE_URL_BACK}/products/${id}`
        );
          return data;
    }catch(error){
        throw error;
    }
};