import React, { useContext } from 'react'
import { ThemeContext } from './index'

function Toolbar() {
    const theme = useContext(ThemeContext)

    return <>
        <div style={{ background: theme.background, color: theme.foreground }}>Toolbar</div>
    </>
}

export default Toolbar