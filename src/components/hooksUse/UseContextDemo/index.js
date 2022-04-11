import React, { useState } from 'react'
import App from './App'

const themes = {
    light: {
        name: 'light',
        foreground: '#000',
        background: '#eee'
    },
    dark: {
        name: 'dark',
        foreground: '#fff',
        background: '#222'
    }
}

export const ThemeContext = React.createContext(themes.light)  //  初始值

function UseCopntextDemo() {

    const [theme, setTheme] = useState(themes.dark)

    function themeChangehandler(theme) {
        const nextTheme = theme.name === 'light' ? 'dark' : 'light'
        setTheme(themes[nextTheme])
    }

    return <ThemeContext.Provider value={theme}>
        <button onClick={() => themeChangehandler(theme)}>change theme</button>
        <App />
    </ThemeContext.Provider>
}

export default UseCopntextDemo