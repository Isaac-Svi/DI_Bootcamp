import React from 'react'
import { randomId } from '../utils'

const planets = ['Mars', 'Venus', 'Jupiter', 'Earth', 'Saturn', 'Neptune']

const Planets = () => {
    return (
        <ul className='list-group w-50 mx-auto my-3'>
            {planets.map((x) => {
                return (
                    <li key={randomId()} className='list-group-item'>
                        {x}
                    </li>
                )
            })}
        </ul>
    )
}

export default Planets
