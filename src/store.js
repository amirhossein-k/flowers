import {combineReducers, createStore,applyMiddleware} from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'
import thunk from 'redux-thunk'

const reducer = combineReducers({})
const midlleware = [thunk]
const initialState ={}

const store = createStore(
    reducer,initialState,
    composeWithDevTools(applyMiddleware(...midlleware))
)

export default store