import React, { Component } from 'react'

export default class ToggleButton extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isToggleOn: true,
        }
    }

    toggle = () => {
        this.setState({ isToggleOn: !this.state.isToggleOn })
    }

    render() {
        const { isToggleOn } = this.state

        return <button onClick={this.toggle}>{isToggleOn ? 'OFF' : 'ON'}</button>
    }
}
