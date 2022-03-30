import { nanoid } from 'nanoid'

const todoList = [{
    id: nanoid(),
    title: "默认的 todo",
    status: 0
}];

const todoReducer = (state = todoList, { value, type }) => {
    switch (type) {
        case 'GET_TODO_LIST':
            break
        case 'ADD_TODO':
            const todo = {
                id: nanoid(),
                title: value.title,
                status: 0
            }
            state = state.concat(todo)
            break
        case 'COMFIRM_TODO':
            let comfirmRes = state.map(todo => {
                if (todo.id === value) {
                    todo.status = 1;
                }
                return todo
            })
            state = comfirmRes
            break
        case 'REFRESH_TODO':
            let refreshRes = state.map(todo => {
                if (todo.id === value) {
                    todo.status = 0;
                }
                return todo
            })
            state = refreshRes
            break
        case 'DEL_TODO':
            let resList = state.filter(todo => todo.id !== value)
            state = resList
            break
        default:
            break
    }

    return state
}

export default todoReducer