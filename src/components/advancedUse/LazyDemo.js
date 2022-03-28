import React from 'react'

const ContextDemo = React.lazy(() => import('./ContextDemo'))

class LazyDemo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (<>
            <p>引入一个异步组件</p>
            <hr />
            <React.Suspense fallback={<div>Loading Component ...</div>}>
                <ContextDemo />
            </React.Suspense>
        </>)
    }
}
export default LazyDemo