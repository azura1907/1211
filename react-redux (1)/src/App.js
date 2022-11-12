import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { todoActionTypes } from './store/actionsType/todoActionTypes';
import { addTodo } from './store/actions/todoActions';
import { fetchPostAction } from './store/actions/postActions';

function App() {
  const todosState = useSelector(state => state.todos);
  const postState = useSelector(state => state.posts)
  const dispatch = useDispatch();

  const [todoValue, setTodoValue] = useState('');

  const handleAddTodo = () => {
    if (!todoValue) return;

    dispatch(addTodo(todoValue));
  }


  // POST REDUCER
  // GET POST FROM API
  // LUU POST VAO REDUCER
  // SHOW POST LEN

  useEffect(() => {
    dispatch(fetchPostAction())
  }, [])

  return (
    <div className="App">
      <input value={todoValue} onChange={(e) => setTodoValue(e.target.value)} />
      <button onClick={handleAddTodo}>Add to do</button>
      <ul>
        {
          todosState.todos.map((item) => {
            return <li key={item}>{item}</li>
          })
        }
      </ul>

      {
        postState.loading ? 'LOADING' : <>
          {
            postState.posts.map((post) => {
              return <div key={post.id}>
                <h1>
                  {post.title}
                </h1>
              </div>
            })
          }

        </>

      }
    </div>
  );
}

export default App;
