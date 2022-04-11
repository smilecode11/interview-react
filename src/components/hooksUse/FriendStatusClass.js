import React from 'react'

class FriendStatus extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            status: false    //  默认离线
        }
    }

    render() {
        return <div>
            <h3>FriendStatus class</h3>
            好友 {this.props.friendId} 在线状态: {this.state.status.toString()}
        </div>
    }
    componentDidMount() {
        console.log(`开始监听 ${this.props.friendId} 的在线状态`)
    }
    componentWillUnmount() {
        console.log(`结束监听 ${this.props.friendId} 的在线状态`)
    }
    componentDidUpdate(prevProps) {
        console.log(`结束监听 ${prevProps.friendId} 的在线状态`)
        console.log(`开始监听 ${this.props.friendId} 的在线状态`)
    }
}

export default FriendStatus