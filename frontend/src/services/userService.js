import axios from 'axios';
import {BASE_URL_BACK} from '../config';

export const login = async (email, password) => {
    const body = {
        email,
        password
    }
    try {
        const { data } = await axios.post(` ${BASE_URL_BACK}/users/login`,body);
        console.log(data)
        return data;//info para sesión del usuario
    }catch (error){
        throw error;
    }
};
