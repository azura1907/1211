import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { todoActionTypes } from './store/actionTypes/todoActionType';

function App() {
  const todoState = useSelector(state => state.todos);

  const [todoValue, setTodoValue] = useState('')

  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (!todoValue) return;
    dispatch({
      type: todoActionTypes.ADD_TODO,
      payload: todoValue
    })
  }

  return (
    < div className="App" >

      <input value={todoValue} onChange={(event) => { setTodoValue(event.target.value) }}></input>
      <button
        onClick={handleAddTodo}>Test button</button>
      {<ul>
        {
          todoState.todos.map((item) => {
            return <li key={item}>{item}</li>
          })
        }
      </ul>}
    </div >
  )
}
export default App;
