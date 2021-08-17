import React, { Component } from 'react'

class Child extends Component {
    constructor() {
        super()
    }

    componentWillUnmount() {
        alert('The componet named Child is about to be unmounted.')
    }

    render() {
        return <h1>Hello World!</h1>
    }
}

export default class Exercise4 extends Component {
    constructor() {
        super()

        this.state = {
            show: true,
        }
    }

    handleClick = () => {
        this.setState({ show: false })
    }

    render() {
        return (
            <div>
                {this.state.show && <Child />}
                <button onClick={this.handleClick}>Delete Header</button>
            </div>
        )
    }
}
