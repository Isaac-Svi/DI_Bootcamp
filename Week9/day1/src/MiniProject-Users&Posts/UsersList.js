import React, { Component } from 'react'
import '../styles/UsersList.css'

export default class UsersList extends Component {
    state = {
        users: [],
        loaded: false,
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((users) => this.setState({ users, loaded: true }))
            .catch((err) => console.log(err.message))
    }

    render() {
        const { users, loaded } = this.state

        return (
            <div className='users-list'>
                <h1>List of users:</h1>
                <div>
                    {!loaded ? (
                        <p>Loading...</p>
                    ) : (
                        users.map(({ id, username, address, name, email }) => {
                            return (
                                <div key={`user-${id}`}>
                                    <p>
                                        <b>ID:</b> {id}
                                        <br />
                                        <b>Name:</b> {name}
                                        <br />
                                        <b>Username:</b> {username}
                                        <br />
                                        <b>Email:</b> {email}
                                        <br />
                                        <b>City:</b> {address.city}
                                    </p>
                                    <br />
                                </div>
                            )
                        })
                    )}
                </div>
            </div>
        )
    }
}
