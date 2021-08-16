import React from 'react'

const Alert = ({ text, color }) => {
    const colorClass = color === 'red' ? 'danger' : 'warning'

    return (
        <div className={`alert alert-${colorClass}`} role='alert'>
            {text}
        </div>
    )
}

export default Alert
