import React, { useState } from 'react'

function Child({ userInfo }) {
    //  render: 初始化 state
    //  re-render: 只恢复初始化的 state, 不会重新设置新的值
    //             只能通过 setName 修改
    const [name, setName] = useState(userInfo.name)

    return <>
        <p>Child, props name: {userInfo.name}</p>
        <p>Child, state name: {name}</p>
    </>
}


function App() {
    const [name, setName] = useState('尘心')
    const userInfo = { name };


    return <>
        <h3>useState 问题 - 关于 useState 只会初始化一次</h3>
        <button onClick={() => setName('尘心 yyds')}>change name</button>
        <Child userInfo={userInfo} />
    </>
}

export default App