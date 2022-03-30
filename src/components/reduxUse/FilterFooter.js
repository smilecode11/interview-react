import React from 'react'
import { connect } from 'react-redux'
import './FilterFooter.css'

class FilterFooter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            type: 'all'
        }
    }
    handleFilter(type) {
        //  被加强的组件内部, dispatch 就被直接绑定到了 props 中
        let { dispatch } = this.props
        // 触发进行列表渲染
        this.setState({
            type
        })
    }
    render() {
        return (<>
            <div className='todo-footer'>
                Show:
                <span className={this.state.type === 'all' ? 'actived' : ''} onClick={(ev) => this.handleFilter('all')}>All</span>
                <span className={this.state.type === 'active' ? 'actived' : ''} onClick={(ev) => this.handleFilter('active')}>Active</span>
                <span className={this.state.type === 'completed' ? 'actived' : ''} onClick={(ev) => this.handleFilter('completed')}>Completed</span>
            </div>
        </>)
    }
}

/** 使用 connect 加强当前组件, dispatch 就被加入到了 props 中*/
export default connect()(FilterFooter)