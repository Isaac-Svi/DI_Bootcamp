import React, { Component } from 'react'

export default class PostList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            errorMsg: '',
            loaded: false,
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((posts) => this.setState({ posts, loaded: true }))
            .catch((err) => this.setState({ errorMsg: err.message }))
    }

    render() {
        const { posts, loaded } = this.state

        return (
            // <div>
            //     <h1>List of posts</h1>
            //     {posts.length > 0 && (
            //         <>
            //             {posts.map(({ body, id }) => {
            //                 return <p key={`post-${id}`}>{body}</p>
            //             })}
            //         </>
            //     )}
            // </div>
            <div style={{ textAlign: 'center' }}>
                <h1>List of users:</h1>
                <div>
                    {!loaded ? (
                        <p>Loading...</p>
                    ) : (
                        posts.map(({ id, title, body }) => {
                            return (
                                <div key={`user-${id}`}>
                                    <p>
                                        <b>ID:</b> {id}
                                        <br />
                                        <b>Title:</b> {title}
                                        <br />
                                        <b>Body:</b> {body}
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
