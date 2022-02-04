import actionTypes from "./actionTypes";
import { login,register } from "../../services/userService";
export const userlogin = (email, password)=>{
        return async function (dispatch) {
            try{
                dispatch({type : actionTypes.AUTH_REQUEST});
                const data = await login(email, password);
                dispatch({
                    type: actionTypes.AUTH_RECEIVE,
                    payload : data,
                });
                localStorage.setItem('userLogger',JSON.stringify(data))
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
export const logout = () => {
    return (dispatch) => {
      localStorage.removeItem('userLogger');
      dispatch({ type: actionTypes.USER_LOGIN_LOGOUT });
      dispatch({ type: actionTypes.USER_DETAILS_RESET });
      dispatch({ type: actionTypes.ORDER_LIST_MY_RESET });
      dispatch({ type: actionTypes.USER_LIST_RESET });
    };
  };

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
