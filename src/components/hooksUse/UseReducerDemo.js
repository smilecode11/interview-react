import React, { useReducer } from 'react'

const initialState = { count: 0 }

const countReducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 }
        case 'decrement':
            return { count: state.count - 1 }
        default:
            return state
    }
}


function UseReducerDemo() {

    const [state, dispatch] = useReducer(countReducer, initialState)

    return <>
        <h3>useReducer demo</h3>
        <span>count: {state.count}</span>
        <div>
            <button onClick={() => dispatch({ type: 'increment' })}>increment</button> &nbsp;
            <button onClick={() => dispatch({ type: 'decrement' })}>decrement</button>
        </div>
    </>
}


export default UseReducerDemo