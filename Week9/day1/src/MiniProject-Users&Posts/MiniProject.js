import React, { Component } from 'react'
import PostList from './PostList'
import UsersList from './UsersList'

export default class MiniProject extends Component {
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
            <div>
                <PostList />
                {/* <ul>
                    {!loaded ? (
                        <p>Loading...</p>
                    ) : (
                        users.map(({ name, email }) => {
                            return (
                                <li>
                                    Name: {name} | Email: {email}
                                </li>
                            )
                        })
                    )}
                </ul> */}
                <UsersList />
            </div>
        )
    }
}
