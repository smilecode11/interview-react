import React from "react";
import ReactDOM from 'react-dom'
import './modal.css'

class PortalsDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            // 修改元素嵌套所在位置
            ReactDOM.createPortal(
                <div className='modal'>
                    {this.props.children}
                </div>,
                document.body
            )
        );
    }
}

export default PortalsDemo;
