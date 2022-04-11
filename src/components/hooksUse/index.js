import React, { useState } from 'react'

import ClickCounter from './ClickCounter'
import ClickCounterClass from './ClickCounterClass'
import LifeCycles from './LifeCycles'
// import FriendStatusClass from './FriendStatusClass'
import FriendStatus from './FriendStatus'

function HooksUse() {

    const [flag, setFlag] = useState(true)
    const [friendId, setFriendId] = useState(1)

    return (<>
        <h3>HooksUse</h3>
        <ClickCounter />
        <hr />
        <ClickCounterClass />
        <hr />
        <button onClick={() => setFlag(!flag)}>toggle LifyCycle</button>
        {flag && <LifeCycles />}
        <hr />
        <button onClick={() => setFriendId(friendId + 1)}>change friendId</button>
        {/* <FriendStatusClass friendId={friendId} /> */}
        <hr />
        <FriendStatus friendId={friendId} />
    </>)
}

export default HooksUse