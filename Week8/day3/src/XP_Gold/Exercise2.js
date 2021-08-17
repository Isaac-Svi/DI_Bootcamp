import React, { Component } from 'react'

export default class Exercise2 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            favoriteColor: 'red',
            hidden: true,
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ favoriteColor: 'yellow', hidden: false })
        }, 5000)
    }

    componentDidUpdate() {
        const { favoriteColor, hidden } = this.state

        if (!hidden) {
            this.el.insertAdjacentHTML(
                'beforeend',
                `<div>My Favorite color is ${favoriteColor}</div>`
            )
        }
    }

    handleClick = () => {
        this.setState({ favoriteColor: 'pink' })
    }

    render() {
        const { favoriteColor } = this.state

        return (
            <div ref={(el) => (this.el = el)}>
                <h1>
                    My Favorite Color is <em>{favoriteColor}</em>
                </h1>
                <button onClick={this.handleClick}>Change to pink</button>
            </div>
        )
    }
}
