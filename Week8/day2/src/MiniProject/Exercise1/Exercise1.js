// This is basically like my App.js file for Exercise 1

import React from 'react'
import Car from './components/Car'

const carinfo = { name: 'Ford', model: 'Mustang' }

const Exercise1 = () => {
    return (
        <>
            <Car carinfo={carinfo} />
        </>
    )
}

export default Exercise1
