import React from 'react'
import todoStore from './store'
import filterStore from './store/filterStore'

import "./index.css"
import FilterFooter from './FilterFooter'

import {
    getTodoList,
    addTodo,
    comfirmTodo,
    delTodo,
    refreshTodo
} from './actions/TodoActions'

import { getFilter, selectFilter } from './actions/FilterActions'

export default class ReduxUse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: [],
            title: '',
            view: 'all'
        }
    }
    handleInput(value) {
        this.setState({
            title: value
        })
    }
    handleClick() {
        if (this.state.title) {
            todoStore.dispatch(addTodo({ title: this.state.title }))
        }
        this.setState({
            title: ''
        })
    }
    handleDel = (id) => {
        todoStore.dispatch(delTodo(id))
    }
    handleStatusChange(todo) {
        if (todo.status === 0) {
            todoStore.dispatch(comfirmTodo(todo.id))
        } else {
            todoStore.dispatch(refreshTodo(todo.id))
        }
    }
    render() {
        return (<div className='todo-control'>
            <div className='todo-input-wrap'>
                <input type="text" value={this.state.title} onInput={(ev) => this.handleInput(ev.target.value)} /> &nbsp;
                <button onClick={(ev) => this.handleClick(ev)}>add todo</button>
            </div>
            <div className='todo-list-wrap'>
                <ul className='todo-list'>
                    {
                        (this.state.view === 'all' || this.state.view === undefined) &&
                        this.state.todoList
                            .map(todo => this.renderLiElement(todo))
                    }
                    {
                        this.state.view === 'active' &&
                        this.state.todoList
                            .filter(todo => todo.status === 1)
                            .map(todo => this.renderLiElement(todo))
                    }
                    {
                        this.state.view === 'completed' &&
                        this.state.todoList
                            .filter(todo => todo.status === 0)
                            .map(todo => this.renderLiElement(todo))
                    }
                </ul>
            </div>
            <FilterFooter filter={this.state.view} />
        </div>)
    }
    renderLiElement(todo) {
        return (
            <li key={todo.id}>
                <span onClick={() => this.handleStatusChange(todo)} className={todo.status === 1 ? 'text-line-through' : ''}>{todo.title}</span>
                &nbsp;
                <span onClick={() => this.handleDel(todo.id)}>❎</span>
            </li>
        )
    }
    componentDidMount() {

        // 初始化 todoList
        todoStore.dispatch(getTodoList())
        this.setState({
            todoList: todoStore.getState()
        })

        // 注册监听
        todoStore.subscribe(() => {
            const list = todoStore.getState();
            this.setState({
                todoList: list
            })

        })

        //  初始化 filter
        filterStore.dispatch(getFilter())
        this.setState({
            view: (filterStore.getState())['view']
        })

        filterStore.subscribe(() => {
            this.setState({
                view: (filterStore.getState())['view']
            })
        })
    }
}
