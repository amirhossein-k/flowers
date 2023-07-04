import { ADD_CART_FAIL, ADD_CART_NULL, ADD_CART_REQUEST, ADD_CART_SUCCESS } from "../constants/cartConstant";



export const addCart = (state={},action)=>{
    switch(action.type){
        case ADD_CART_REQUEST:
            return {loading: true}
        case ADD_CART_SUCCESS:
            return { loading:false, cart: action.payload}
        case ADD_CART_FAIL:
            return { loading:false, error:action.payload}
        case ADD_CART_NULL:
            return { loading:false, cart:null}
        default:
            return state
    }
}
