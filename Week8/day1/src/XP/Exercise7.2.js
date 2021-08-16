import React from 'react'

const animals = [
    { label: 'Horse' },
    { label: 'Turtle' },
    { label: 'Elephant' },
    { label: 'Monkey' },
]

const Exercise7_2 = () => {
    return (
        <>
            <h2>Animal list version 2:</h2>
            <ul>
                {animals.map((x, i) => (
                    <li key={i}>{x.label}</li>
                ))}
            </ul>
        </>
    )
}

export default Exercise7_2
