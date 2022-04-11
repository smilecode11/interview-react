import React, { useState } from 'react'

function ClickCounter() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('尘心')

    function clickHandler() {
        setCount(count + 1)
        setName(name + '2020')
    }

    return (<>
        <h5>State Hook</h5>
        <p>你点击了 {count} 次 {name}</p>
        <button onClick={clickHandler}>点击</button>
    </>)
}

export default ClickCounter