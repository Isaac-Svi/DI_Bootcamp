import React from 'react'
import { randomId } from '../utils'

const animals = ['Horse', 'Turtle', 'Elephant', 'Monkey']

const Exercise7 = () => {
    return (
        <ul>
            {animals.map((x) => {
                return <li key={randomId()}>{x}</li>
            })}
        </ul>
    )
}

export default Exercise7
