import React, { useContext } from 'react'
import { ThemeContext } from './index'

function ToolLink() {
    const theme = useContext(ThemeContext)

    return <>
        <button style={{ background: theme.background, color: theme.foreground }}>ToolLink</button>
    </>
}

export default ToolLink