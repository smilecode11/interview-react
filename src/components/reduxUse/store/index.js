import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

//  导入 reducer
import todoReducer from '../reducers/TodoReducers'

//  构建 store
const todoStore = createStore(todoReducer, applyMiddleware(thunk))

//  导出 store
export default todoStore 