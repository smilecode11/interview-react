import React, { useState, useEffect } from 'react'

function FriendStatus({ friendId }) {

    const [status, setStatus] = useState(false)

    //  DIdMount 和 DidUpdate
    useEffect(() => {
        console.log(`开始监听 ${friendId} 的在线状态`)

        //  [特别注意]
        //  此处并非完全等同于 WillUnMount
        //  props 发送变化, 即更新, 也会执行结束监听
        //  准确的来说: 返回的函数, 会在下一次 effect 执行之前, 被执行
        return () => {
            console.log(`结束监听 ${friendId} 的在线状态`)
        }
    })

    return <div>
        <h3>FriendStatus</h3>
        好友 {friendId} 在线状态: {status.toString()}
    </div>
}

export default FriendStatus