import { combineReducers } from "redux";
import postReducer from "./postRuducer";
import productsReducer from "./productReducer";
import todosReducer from "./todoReducer";

export const reducers = combineReducers({
    todos: todosReducer,
    products: productsReducer,
    posts: postReducer,
})