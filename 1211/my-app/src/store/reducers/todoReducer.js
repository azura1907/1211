import { todoActionTypes } from "../actionTypes/todoActionType";

const initialState = {
    todos: [4, 5, 6]
}

export function todoReducer(state = initialState, action) {
    switch (action.type) {
        case 'TEST': {
            console.log('test');
            return state;
        }

        case todoActionTypes.ADD_TODO: {
            const newTodo = [...state.todos];
            newTodo.push(action.payload);
            return {
                ...state,
                todos: newTodo
            }
        }
        default: {
            return state;
        }
    }
}