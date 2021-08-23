import React, { Component } from 'react'

export default class XPN extends Component {
    state = {
        users: [],
    }

    componentDidMount() {
        fetch('/users')
            .then((res) => res.json())
            .then((users) => this.setState({ users }))
            .catch((err) => console.log(err.messgage))
    }

    render() {
        return (
            <ul>
                {this.state.users.map(({ id, username }) => {
                    return <li key={id}>{username}</li>
                })}
            </ul>
        )
    }
}
