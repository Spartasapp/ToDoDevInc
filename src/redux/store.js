import {createStore,applyMiddleware,combineReducers} from "redux";
import thunkMiddleware from 'redux-thunk';
import todoReducer from './todoReducer'

const reducer = combineReducers({
    todoReducer: todoReducer
})

const store = createStore(reducer,applyMiddleware(thunkMiddleware));
export default store;