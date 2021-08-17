import React from 'react'

const Form = ({ details, handleChange, handleCheck }) => {
    const { firstName, lastName, age, destination, nutsFree, lactoseFree, vegan } =
        details

    return (
        <form>
            <input
                value={firstName}
                type='text'
                name='firstName'
                placeholder='First Name'
                onChange={handleChange}
            />
            <br />
            <input
                value={lastName}
                type='text'
                name='lastName'
                placeholder='Last Name'
                onChange={handleChange}
            />
            <br />
            <input
                value={age}
                type='text'
                name='age'
                placeholder='Age'
                onChange={handleChange}
            />
            <br />
            <br />
            <label htmlFor='male'>Male</label>
            <input
                type='radio'
                name='gender'
                value='male'
                id='male'
                onChange={handleChange}
            />
            <br />
            <label htmlFor='female'>Female</label>
            <input
                type='radio'
                name='gender'
                value='female'
                id='female'
                onChange={handleChange}
            />
            <br />
            <h3>Select your destination</h3>
            <select onChange={handleChange} value={destination} name='destination'>
                <option value=''>--Please Choose a destination</option>
                <option value='Thailand'>Thailand</option>
                <option value='Japan'>Japan</option>
                <option value='Brazil'>Brazil</option>
            </select>
            <h3>Dietary restrictions:</h3>
            <input
                type='checkbox'
                id='nuts-free'
                name='nutsFree'
                value={nutsFree ? 'on' : ''}
                checked={nutsFree}
                onChange={handleCheck}
            />
            <label htmlFor='nuts-free'>Nuts free</label>
            <br />
            <input
                type='checkbox'
                id='lactose-free'
                name='lactoseFree'
                value={lactoseFree ? 'on' : ''}
                checked={lactoseFree}
                onChange={handleCheck}
            />
            <label htmlFor='lactose-free'>Lactose free</label>
            <br />
            <input
                type='checkbox'
                id='vegan'
                name='vegan'
                value={vegan ? 'on' : ''}
                checked={vegan}
                onChange={handleCheck}
            />
            <label htmlFor='vegan'>Vegan</label>
            <br />
            <br />
            <button>Submit</button>
        </form>
    )
}

export default Form
