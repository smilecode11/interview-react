import React, { useState } from 'react'
import useAxios from '../../customHooks/useAxios'
import useMousePosition from '../../customHooks/useMousePosition'

function App() {
    const [x, y] = useMousePosition()

    const [url, setUrl] = useState('http://localhost:3000')

    return <>
        <h3>custom hook demo</h3>
        <div>useMousePosition X:{x} - Y:{y}</div>
        <button onClick={() => setUrl('http://localhost:3000/abc')}>change url with error</button>&nbsp;
        <ViewResp url={url} />
    </>
}

function ViewResp({ url }) {
    let [loading, data, error] = useAxios(url)

    if (loading) return <div>loading...</div>

    return error
        ? <div>{JSON.stringify(error)} </div>
        : <div>{JSON.stringify(data)} </div>
}

export default App