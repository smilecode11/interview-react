import React, { useState, useRef, useEffect } from 'react'

function App() {
    const [count, setCount] = useState(0)

    const countRef = useRef(0)
    useEffect(() => {
        console.log('useEffect...', count)

        const timer = setInterval(() => {
            console.log("setInterval...", countRef.current)
            //  useEffect 内部不要使用 state(或自定义变量) 进行计算操作, 使用 ref 实现
            setCount(++countRef.current)    
            // setCount(count + 1)
        }, 1000)

        return () => clearInterval(timer)
    }, [])  //  依赖为 []

    //  依赖为 [] 时(即模拟 DidMount), re-render 不会重新执行 effect 函数
    //  没有依赖(即模拟 DidMount 和 DidUpdate, 会执行 effect 函数) 

    return <>
        <h3>useEffect 函数内部执行</h3>
        <p>count: {count}</p>
    </>
}

export default App