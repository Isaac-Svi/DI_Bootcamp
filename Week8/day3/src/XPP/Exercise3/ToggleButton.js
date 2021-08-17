import React, { Component } from 'react'

export default class ToggleButton extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isToggleOn: 'OFF',
        }
    }

    toggle = () => {
        const { isToggleOn } = this.state
        const x = isToggleOn === 'ON' ? 'OFF' : 'ON'

        this.setState({ isToggleOn: x })
    }

    render() {
        return <button onClick={this.toggle}>{this.state.isToggleOn}</button>
    }
}
