import React, { useState, memo, useMemo } from 'react'

/* function Child({ userInfo }) {
    console.log(`Child render`, userInfo)
    return <div>
        <p>This is Child {userInfo.name} {userInfo.age}</p>
    </div>
}*/


//  1. 类似 class PureComponent, 对 props 进行浅层比较
const Child = memo(({ userInfo }) => {
    console.log(`Child render`, userInfo)

    return <div>
        <p>This is Child {userInfo.name} {userInfo.age}</p>
    </div>
})


function App() {
    console.log(`Parent render ...`)

    const [count, setCount] = useState(0)
    const [name, setName] = useState("尘心")

    /* const userInfo = {
        name,
        age: 27
    } */
    //  2. 使用 useMemo 包裹传递的 props
    //  用 useMemo 缓存数据, 有依赖
    const userInfo = useMemo(() => {
        return { name, age: 27 }
    }, [name])

    return <>
        <h3>useMemo demo</h3>
        <p>
            <span>count: {count}</span> &nbsp;
            <button onClick={() => setCount(count + 1)}>click</button>
        </p>
        <Child userInfo={userInfo} />
    </>
}


export default App