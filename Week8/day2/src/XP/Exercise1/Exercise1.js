import React from 'react'
import PrintHello from './PrintHello'
import PrintHello2 from './PrintHello2'

const Exercise1 = () => {
    return (
        <div>
            {PrintHello()}
            <PrintHello2 />
        </div>
    )
}

export default Exercise1
