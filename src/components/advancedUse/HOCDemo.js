import React from 'react'

//  高阶组件
const withMouse = (Component) => {
    class withMouseComponent extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                x: 0,
                y: 0
            }
            this.mouseRef = React.createRef()
        }
        handleMouseMove(ev) {
            this.setState({
                x: ev.clientX,
                y: ev.clientY
            })
        }
        render() {
            return (
                //  onMouseMove={(ev) => this.handleMouseMove(ev)}
                <div style={{ minHeight: '500px' }} ref={this.mouseRef}>
                    <Component {...this.props} mouse={this.state} />
                </div>
            )
        }
        componentDidMount() {
            this.mouseRef.current.addEventListener('mousemove', this.handleMouseMove.bind(this))
        }
        componentWillUnmount() {
            this.mouseRef.current.removeEventListener('mousemove', this.handleMouseMove.bind(this))
        }
    }
    return withMouseComponent
}

//  测试组件
class TestDemo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        let { mouse } = this.props
        return (
            <>
                <div>TestDemo with mouse data</div>
                <div>X: {mouse.x} - Y:{mouse.y}</div>
            </>)
    }
}

export default withMouse(TestDemo)