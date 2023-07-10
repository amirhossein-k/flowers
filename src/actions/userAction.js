import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_LOGOUT_FAIL,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL,
  USER_UPDATE_NULL
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

    const { data } = await axios.post(
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

// updsate

export const updateUser = (name,family,phone_number,email,password,address)=> async(dispatch,getState)=>{
  try {
    // localStorage.removeItem("userInfo");

    dispatch({ type: USER_UPDATE_REQUEST});
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    // const d = {}
    // if(name !== ''){
    //   d.name = name
    // }else if( family !== ''){
    //   d.family = family
    // }else if(phone_number !== ''){
    //   d.phone_number =phone_number
    // }else if(email !== ''){
    //   d.email = email
    // }else if(password !== ''){
    //   d.password = password
    // }else if(address !== ''){
    //   d.address = address
    // }
    // axios.put('fff',)
    console.log(name,'name action')
    console.log(address,'addres action')
    const {data} = await axios.put('http://localhost:9000/api/users/update',{name,family,phone_number,email,password,address},config)
    // const {data} = await axios.put('http://localhost:9000/api/users/update',d,config)

    console.log(data,'data')
    dispatch({ type: USER_UPDATE_SUCCESS,payload:data });

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

    dispatch({type: USER_UPDATE_NULL})

    localStorage.setItem("userInfo", JSON.stringify(data));

  } catch (error) {
    dispatch({
      type: USER_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }

}

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