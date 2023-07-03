import { ADD_CART_SUCCESS } from "../constants/cartConstant";



export const addCart = () => async (dispatch) => {
    localStorage.setItem("userInfo");
    dispatch({ type: ADD_CART_SUCCESS });
};
