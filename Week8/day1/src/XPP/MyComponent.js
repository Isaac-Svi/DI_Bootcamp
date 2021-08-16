import React from 'react'
import reactIcon from '../assets/react-icon.svg'
import './MyComponent.css'

const myStyle = {
    color: 'white',
    backgroundColor: 'DodgerBlue',
    padding: '10px',
    fontFamily: 'Arial',
}

const mySuperStyles = {
    color: 'yellow',
    fontSize: '16px',
    fontWeight: 'bold',
    border: '1px solid yellow',
    backgroundColor: 'black',
    padding: '5px',
    borderRadius: '8px',
    cursor: 'pointer',
    margin: '10px',
}

const MyComponent = () => {
    return (
        <div>
            <h1 style={{ color: 'red', backgroundColor: 'lightblue' }}>
                This is a Header
            </h1>
            <h1 style={myStyle}>Hello Style!</h1>
            <h1 className='newStyle'>Hello Style!</h1>
            <p>This is a Paragraph</p>
            <a href='#'>This is a Link</a>
            <form>
                <h2>This is a Form:</h2>
                <p>Enter your name:</p>
                <input type='text' />
                <button>Submit</button>
            </form>
            <p>Here is an Image:</p>
            <img src={reactIcon} alt='react icon' />
            <h3>This is a List:</h3>
            <ul>
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
            </ul>
            <button style={mySuperStyles}>I'm a stylish button</button>
        </div>
    )
}

export default MyComponent
