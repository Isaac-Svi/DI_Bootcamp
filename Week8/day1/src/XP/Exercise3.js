import React from 'react'

const myelement = <h1>I Love JSX!</h1>

const sum = 5 + 5

const Exercise3 = () => {
    return (
        <>
            <div>{myelement}</div>
            <h1>React is {sum} time better with JSX</h1>
        </>
    )
}

export default Exercise3
