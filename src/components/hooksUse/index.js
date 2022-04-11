import React from 'react'

import ClickCounter from './ClickCounter'
import ClickCounterClass from './ClickCounterClass'

class HooksUse extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (<>
            <h3>HooksUse</h3>
            <ClickCounter />
            <hr />
            <ClickCounterClass />
        </>)
    }
}

export default HooksUse