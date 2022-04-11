import React from 'react'

class ClickCounter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            name: "尘心"
        }
    }

    clickHandler() {
        this.setState({
            count: this.state.count + 1,
            name: this.state.name + '2020'
        })
    }

    render() {
        return (<>
            <h5>class component</h5>
            <p>你点击了 {this.state.count} 次 {this.state.name}</p>
            <button onClick={() => this.clickHandler()}>点击</button>
        </>)
    }
}

export default ClickCounter