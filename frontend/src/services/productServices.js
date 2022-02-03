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

/*export const updateProduct = async (body, id) => {
    try {
        const { data } = await axios.post(
            ` ${BASE_URL_BACK}/products/${id}`, body);
        console.log(data);
        return data;
    }catch(error){
        throw error;
    }
};

export const deleteProduct = async (id) => {
    try {
        const { data } = await axios.post(
            ` ${BASE_URL_BACK}/products/${id}`);
        console.log(data);
        return data;
    }catch(error){
        throw error;
    }
};*/