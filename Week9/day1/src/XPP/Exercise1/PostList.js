import React, { Component } from 'react'
import data from './data.json'

export default class PostList extends Component {
    render() {
        return (
            <>
                {data.map(({ id, title, content }) => {
                    return (
                        <div key={id}>
                            <h1>{title}</h1>
                            <p>{content}</p>
                        </div>
                    )
                })}
            </>
        )
    }
}
