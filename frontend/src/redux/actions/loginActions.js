import actionTypes from "./actionTypes";
import { login } from "../../services/userService";
export const userlogin = (email='', password='')=>{
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