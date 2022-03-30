/** 获取 todo*/
export const getTodoList = () => {
    return {
        type: "GET_TODO_LIST",
        description: "获取 todo"
    }
}

/** 添加 todo*/
export const addTodo = (todo) => {
    return {
        type: "ADD_TODO",
        description: "新增 todo",
        value: todo
    }
}

/** 完成 todo*/
export const comfirmTodo = (id) => {
    return {
        type: "COMFIRM_TODO",
        description: "完成 todo",
        value: id
    }
}

/** 重置 todo*/
export const refreshTodo = (id) => {
    return {
        type: "REFRESH_TODO",
        description: "重置 todo",
        value: id
    }
}

/** 删除 todo*/
export const delTodo = (id) => {
    return {
        type: 'DEL_TODO',
        description: "删除 todo",
        value: id
    }
}

export default {
    getTodoList,
    addTodo,
    comfirmTodo,
    refreshTodo,
    addTodo
}