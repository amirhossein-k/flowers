import { ADD_CART_FAIL, ADD_CART_LIST_FAIL, ADD_CART_LIST_REQUEST, ADD_CART_LIST_SUCCESS, ADD_CART_NULL, ADD_CART_REQUEST, ADD_CART_SUCCESS } from "../constants/cartConstant";

export const addCart = (_id,order) => async (dispatch) => {
    try {
      dispatch({ type: ADD_CART_REQUEST });
    //   const config = {
    //     header: {
    //       "Content-Type": "application/json",
    //     },
    //   };
    //   const { data } = await axios.post(
    //     "https://n07siw-8000.preview.csb.app/api/users/login",
    //     { email, password },
    //     config
    //   );
    const message = `اضافه شد`
    const cart = {'id': _id,'order':order}
   
   

      dispatch({ type: ADD_CART_SUCCESS, payload: message });
      setTimeout(()=>{
        dispatch({type:ADD_CART_NULL})
      },1000)
      // localStorage.setItem("cart", JSON.stringify(get));
    } catch (error) {
      dispatch({
        type: ADD_CART_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  
export const listCart = () => async (dispatch) => {
  try {
    dispatch({ type: ADD_CART_LIST_REQUEST });
 

    const listCart = await JSON.parse(localStorage.getItem('cartlist'))
    
    if(listCart) dispatch({ type: ADD_CART_LIST_SUCCESS, payload: listCart });

   
 
    // localStorage.setItem("cart", JSON.stringify(get));
  } catch (error) {
    dispatch({
      type: ADD_CART_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};