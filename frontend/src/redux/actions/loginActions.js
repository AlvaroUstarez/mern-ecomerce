import actionTypes from "./actionTypes";
import { login, register } from "../../services/userService";
export const userlogin = (email, password)=>{
        return async function (dispatch) {
            try{
                dispatch({type : actionTypes.AUTH_REQUEST});
                const data = await login(email, password);
                dispatch({
                    type: actionTypes.AUTH_RECEIVE,
                    payload : data,
                });
            }catch (error) {
                dispatch({
                    type:actionTypes.AUTH_ERROR,
                    payload:
                        error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
                });
            }
        };
}

export const userRegister = (name ,email , password)=>{
        return async function (dispatch) {
            try{
                dispatch({type : actionTypes.REGISTER_REQUEST});
                const data = await register(name, email, password);
                dispatch({
                    type: actionTypes.REGISTER_RECEIVE,
                    payload : data,
                });
            }catch (error) {
                dispatch({
                    type:actionTypes.REGISTER_ERROR,
                    payload:
                        error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
                });
            }
        };
}