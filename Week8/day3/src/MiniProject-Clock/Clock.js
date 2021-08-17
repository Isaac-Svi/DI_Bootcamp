import React, { Component } from 'react'

export default class Clock extends Component {
    constructor() {
        super()

        this.state = {
            date: new Date(),
        }
    }

    componentDidMount() {
        this.interval = setInterval(this.tick, 1000)
    }

    tick = () => this.setState({ date: new Date() })

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h3>It is {this.state.date.toLocaleTimeString()}</h3>
            </div>
        )
    }
}
