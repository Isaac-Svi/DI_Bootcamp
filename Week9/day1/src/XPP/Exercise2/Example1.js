import React, { Component } from 'react'
import data from './data.json'

export default class Example1 extends Component {
    render() {
        return (
            <ul>
                {data.SocialMedias.map((x, i) => (
                    <li key={`link-${i}`}>{x}</li>
                ))}
            </ul>
        )
    }
}
