import React from 'react'

//  创建一个 Context 并填入默认值
const ThemeContext = React.createContext('light')

class ContextDemo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            theme: 'light'
        }
    }
    render() {
        return (
            <ThemeContext.Provider value={this.state.theme}>
                <ToolBar />
                <hr />
                <button onClick={(ev) => this.handlerThemeChange(ev)}>change theme</button>
            </ThemeContext.Provider>
        )
    }
    handlerThemeChange() {
        this.setState({
            theme: this.state.theme === 'light' ? 'dark' : 'light'
        })
    }
}

class ToolBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <>
                <ThemedButton />
                <ThemedLink />
            </>
        )
    }
}

/** 类使组件读取 context */
class ThemedButton extends React.Component {
    //  也可以使用静态方法绑定方式
    // static contextType = ThemeContext
    render() {
        const theme = this.context;
        return <div>
            <p>button theme is {theme}</p>
        </div>
    }
}
//  指定 contextType 读取当前创建的 theme context
ThemedButton.contextType = ThemeContext

/** 函数式组件读取 context*/
function ThemedLink(props) {
    return (
        <ThemeContext.Consumer>
            {(value) => {
                return <p>link theme is {value}</p>
            }}
        </ThemeContext.Consumer>
    )
}

export default ContextDemo