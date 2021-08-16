import React from 'react'

const colorClasses = {
    red: 'danger',
    orange: 'warning',
    blue: 'primary',
    lightblue: 'info',
    green: 'success',
    gray: 'secondary',
    white: 'light',
    darkgray: 'dark',
}

const Alert = ({ text, color }) => {
    const colorClass = colorClasses[color]

    if (!colorClass) {
        alert(`The color ${color} is not in the list.`)
        return <></>
    }

    return (
        <div className={`alert alert-${colorClass}`} role='alert'>
            {text}
        </div>
    )
}

export default Alert
