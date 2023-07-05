import {combineReducers, createStore,applyMiddleware} from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'
import thunk from 'redux-thunk'
import {categoryListReducer,categoryListProductReducer} from './reducer/categoryReducer'
import {logoutReducer,userLoginReducer, userRegister}from './reducer/userReducer'
import { productCreateReducer, productListReducder } from './reducer/productReducer'
import { addCart, listCart } from './reducer/cartReducer'

const reducer = combineReducers({
    categoryList : categoryListReducer,
    categoryListProduct:categoryListProductReducer,
    userLogin: userLoginReducer,
    logout: logoutReducer,
    userRegister: userRegister,
    productList:productListReducder,
    productCreate:productCreateReducer,
    cart: addCart,
    listCart: listCart

})
const midlleware = [thunk]

const userInfofromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

const initialState ={
    userLogin: {userInfo: userInfofromStorage}
}

const store = createStore(
    reducer,initialState,
    composeWithDevTools(applyMiddleware(...midlleware))
)

export default store