import React from 'react'
import './Card.css'

const Card = ({ id, name, image, occupation, clickImage }) => {
    return (
        <div className='card' onClick={() => clickImage(id)}>
            <img src={image} alt={`image-${id}`} />
            <span>
                <strong>Name:</strong> {name}
            </span>
            <br />
            <span>
                <strong>Occupation:</strong> {occupation}
            </span>
        </div>
    )
}

export default Card
