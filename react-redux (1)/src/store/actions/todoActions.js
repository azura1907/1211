import { todoActionTypes } from "../actionsType/todoActionTypes"

export const addTodo = (todo) => {
    return {
        type: todoActionTypes.ADD_TODO,
        payload: todo
    }
}