import React from 'react'

const Output = ({ details }) => {
    const {
        firstName,
        lastName,
        age,
        gender,
        destination,
        nutsFree,
        lactoseFree,
        vegan,
    } = details

    return (
        <div className='output'>
            <h2>Entered information:</h2>

            <div>
                <em>
                    Your name: {firstName} {lastName}
                </em>
            </div>
            <div>
                <em>Your age: {age}</em>
            </div>
            <div>
                <em>Your gender: {gender}</em>
            </div>
            <div>
                <em>Your destination: {destination}</em>
            </div>
            <div>
                <em>Your dietary restrictions: </em>
                <ul>
                    <li>Nuts free: {nutsFree ? 'Yes' : 'No'}</li>
                    <li>Lactose free: {lactoseFree ? 'Yes' : 'No'}</li>
                    <li>Vegan: {vegan ? 'Yes' : 'No'}</li>
                </ul>
            </div>
        </div>
    )
}

export default Output
