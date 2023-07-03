import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_LOGOUT_FAIL,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS
} from "../constants/userConstant";

import axios from "axios";

// login
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.put(
      "http://localhost:9000/api/users/login",
      { email, password },
      config
    );
    dispatch({type:USER_LOGIN_SUCCESS,payload:data})
    localStorage.setItem('userInfo',JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// logout

// export const logout = ()=> async(dispatch)=>{
//   try {
//     localStorage.removeItem("userInfo");
//     dispatch({ type: USER_LOGOUT,payload: action.payload });
//   } catch (error) {
//     dispatch({
//       type: USER_LOGOUT_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }

// }

export const logout = () => async (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: USER_LOGOUT });
};

// register
export const register = (name,email,password) => async(dispatch)=>{
  try{
    dispatch({type:USER_REGISTER_REQUEST})

    const config = {
      header:{
        "Content-Type": "application/json"
      }
    }

    const {data} = await axios.post('http://localhost:9000/api/users',{name,email,password},config)
    dispatch({type:USER_REGISTER_SUCCESS,payload: data})
    dispatch({type:USER_LOGIN_SUCCESS,payload: data})
    localStorage.setItem('userInfo',JSON.stringify(data))

  }catch(error){
    dispatch({type:USER_REGISTER_FAIL,payload: error.response && error.response.data.message 
      ?error.response.data.message 
       : error.message} )
  }
}