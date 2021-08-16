import React from 'react'

const listItems = (
    <ul>
        <li>Apples</li>
        <li>Bananas</li>
        <li>Cherries</li>
    </ul>
)

const Exercise4 = () => {
    return (
        <div>
            <h1>I am a Header.</h1>
            <h1>I am a Header too.</h1>
            {listItems}
        </div>
    )
}

export default Exercise4
