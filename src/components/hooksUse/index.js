import React, { useState } from 'react'

import ClickCounter from './ClickCounter'
import ClickCounterClass from './ClickCounterClass'
import LifeCycles from './LifeCycles'
import FriendStatusClass from './FriendStatusClass'
import FriendStatus from './FriendStatus'
import UseRefDemo from './UseRefDemo'
import UseContextDemo from './UseContextDemo'
import UseReducerDemo from './UseReducerDemo'
import UseMemoDemo from './UseMemoDemo'
import UseCallbackDemo from './UseCallback'
import CustomHookDemo from './CustomHookDemo'
import UseStateTrap from './UseStateTrap'
import UseEffectChangeState from './UseEffectChangeState'

function HooksUse() {

    const [flag, setFlag] = useState(true)
    const [friendId, setFriendId] = useState(1)

    return (<div style={{ paddingBottom: '240px' }}>
        <h3>HooksUse</h3>
        <hr />
        <ClickCounter />
        <ClickCounterClass />
        <hr />
        <button onClick={() => setFlag(!flag)}>toggle LifyCycle</button>
        {flag && <LifeCycles />}
        <hr />
        <button onClick={() => setFriendId(friendId + 1)}>change friendId</button>
        <FriendStatusClass friendId={friendId} />
        <FriendStatus friendId={friendId} />
        <hr />
        <UseRefDemo />
        <hr />
        <UseContextDemo />
        <hr />
        <UseReducerDemo />
        <hr />
        <UseMemoDemo />
        <hr />
        <UseCallbackDemo />
        <hr />
        <CustomHookDemo />
        <hr />
        <UseStateTrap />
        <hr />
        <UseEffectChangeState />
    </div>)
}

export default HooksUse