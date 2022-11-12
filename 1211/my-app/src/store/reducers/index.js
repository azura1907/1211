import { combineReducers } from "redux";
import postReducer from "./postReducer";
import { productReducer } from "./productReducer";
import { todoReducer } from "./todoReducer";

const reducers = combineReducers({
    todos: todoReducer,
    products: productReducer,
    posts: postReducer
})

export default reducers