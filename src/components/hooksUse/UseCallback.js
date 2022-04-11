import React, { useState, memo, useMemo, useCallback } from 'react'

const Child = memo(({ userInfo, onChange }) => {
    console.log(`Child render`, userInfo)

    return <div>
        <p>This is Child {userInfo.name} {userInfo.age}</p>
        <input type="text" onInput={onChange} />
    </div>
})


function App() {
    console.log(`Parent render ...`)

    const [count, setCount] = useState(0)
    const [name, setName] = useState("尘心")

    //  使用 useMemo 缓存数据
    const userInfo = useMemo(() => {
        return { name, age: 27 }
    }, [name])

    // function onChange(e) {
    //     console.log(e.target.value)
    // }
    //  使用 useCallback 缓存函数, 此时依赖需要设置为 []*
    const onChange = useCallback((e) => {
        console.log(e.target.value)
    }, [])

    return <>
        <h3>useCallback demo</h3>
        <p>
            <span>count: {count}</span> &nbsp;
            <button onClick={() => setCount(count + 1)}>click</button>
        </p>
        <Child userInfo={userInfo} onChange={onChange} />
    </>
}


export default App