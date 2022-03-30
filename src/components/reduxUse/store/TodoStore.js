import { createStore } from 'redux'

//  导入 todo reducer
import todoReducer from '../reducers/TodoReducers'

//  构建 store
const todoStore = createStore(todoReducer)

//  导出 store
export default todoStore