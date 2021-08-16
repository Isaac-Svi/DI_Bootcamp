import React from 'react'

const Alert = ({ text, show }) => {
    return (
        <div
            style={{ display: show ? 'block' : 'none' }}
            className='alert alert-danger'
            role='alert'
        >
            {text}
        </div>
    )
}

export default Alert
