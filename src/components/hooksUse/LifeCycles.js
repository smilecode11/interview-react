import React, { useState, useEffect } from 'react'

function ClickCounter() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('尘心')

    //  模拟 class 组件的 DidMount 和 DidUpdate
    // useEffect(() => {
    //     console.log("发送一个 ajax 请求")
    // })

    //  模拟 class 组件的 DidMount 生命周期
    useEffect(() => {
        console.log("加载完了")
    }, [])  //  第二个参数是 [], 不依赖任何 state

    //  模拟 class 组件的 DidUpdate 生命周期
    useEffect(() => {
        console.log('更新了')
    }, [count, name])   //  依赖 state

    useEffect(() => {
        const timerId = setInterval(() => console.log(Date.now()), 1000)

        //  返回一个函数
        //  模拟 WillUnMount
        return () => {
            window.clearInterval(timerId)
        }
    }, [])

    function clickHandler() {
        setCount(count + 1)
        setName(name + '2020')
    }

    return (<>
        <h5>Effect Hook</h5>
        <p>你点击了 {count} 次 {name}</p>
        <button onClick={clickHandler}>点击</button>
    </>)
}

export default ClickCounter