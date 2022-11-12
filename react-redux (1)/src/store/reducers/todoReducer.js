import { todoActionTypes } from "../actionsType/todoActionTypes";

const initialState = {
    todos: [1, 2, 3, 4],
    abc: 'xyz'
}

function todosReducer(state = initialState, action) {
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

export default todosReducer;