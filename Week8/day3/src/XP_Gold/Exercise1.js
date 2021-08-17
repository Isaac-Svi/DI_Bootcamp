import React, { Component } from 'react'

export default class Exercise1 extends Component {
    constructor() {
        super()

        this.state = {
            favoriteColor: 'red',
        }
    }

    shouldComponentUpdate() {
        return false
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ favoriteColor: 'yellow' })
        }, 5000)
    }

    handleClick = () => {
        this.setState({ favoriteColor: 'pink' })
    }

    render() {
        return (
            <div>
                <h1>
                    My Favorite Color is <em>{this.state.favoriteColor}</em>
                </h1>
                <button onClick={this.handleClick}>Change to pink</button>
            </div>
        )
    }
}
