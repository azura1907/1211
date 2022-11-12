import { applyMiddleware, createStore } from 'redux'
import reducers from './reducers'
import thunk from 'redux-thunk'

//để xử lý phần gọi api từ code bất đồng bộ thành code đồng bộ & trả về cho store
const middlewares = [thunk]

const store = createStore(reducers, applyMiddleware(...middlewares));
export default store