import React from 'react'
import PropTypes from 'prop-types'


//  App 组件
const App = (props) => (
    <Mouse render={({ x, y }) => {
        return (
            <>
                <p>{x} - {y}</p>
                <p>{props.text}</p>
            </>
        )
    }} />
)

//  Render Props 的核心思想
//  通过一个函数将 class 组件中的 state 作为 props 传递给纯函数组件使用
class Mouse extends React.Component {
    constructor(props) {
        super(props)
        // state 即多个组件公共逻辑的数据
        this.state = {
            x: 0,
            y: 0
        }
    }
    handleMouseMove = (ev) => {
        this.setState({
            x: ev.clientX,
            y: ev.clientY
        })
    }
    render() {
        return (
            <div style={{ minHeight: '500px' }} onMouseMove={this.handleMouseMove}>
                {/* 将当前的 state 作为 props 传给 render, render 是一个函数 */}
                {this.props.render(this.state)}
            </div>
        )
    }
}
Mouse.propTypes = {
    render: PropTypes.func.isRequired
}

export default App