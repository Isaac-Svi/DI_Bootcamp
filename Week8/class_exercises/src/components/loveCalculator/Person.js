import React from 'react'

const Person = (props) => {
    const { num, handleChange, value } = props

    return (
        <div>
            <input
                type='text'
                name='name'
                placeholder={`Person ${num}`}
                value={value}
                onChange={handleChange}
            />
            <span>{value}</span>
        </div>
    )
}

export default Person
