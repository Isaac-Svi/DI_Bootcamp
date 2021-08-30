import React from 'react'

const Robot = (props) => {
    const { name, email, id } = props

    return (
        <div className='robot'>
            <img src={`https://robohash.org/${id}`} alt='robot' />
            <h3>{name}</h3>
            <p>{email}</p>
        </div>
    )
}

export default Robot
