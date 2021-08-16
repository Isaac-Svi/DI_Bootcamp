import React, { Component } from 'react'
import Language from './Language'

export default class LanguageList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            languages: [
                { name: 'Php', votes: 0 },
                { name: 'Python', votes: 0 },
                { name: 'JavaSript', votes: 0 },
                { name: 'Java', votes: 0 },
            ],
        }
    }

    render() {
        return (
            <div>
                <h2>Vote for your favorite language!</h2>
                {this.state.languages.map(({ name, votes }) => {
                    return <Language name={name} votes={votes} />
                })}
            </div>
        )
    }
}
