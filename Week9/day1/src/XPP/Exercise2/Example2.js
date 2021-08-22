import React, { Component } from 'react'
import data from './data.json'

export default class Example1 extends Component {
    render() {
        return (
            <>
                {data.Skills.map(({ Area, SkillSet }, i) => (
                    <div key={`skillset-${i}`}>
                        <h2>{Area}</h2>
                        <ul>
                            {SkillSet.map(({ Name }, i) => (
                                <li key={`skill-${i}`}>{Name}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </>
        )
    }
}
