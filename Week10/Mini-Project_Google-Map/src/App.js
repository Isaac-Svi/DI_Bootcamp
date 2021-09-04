import React from 'react'
import GoogleMap from './GoogleMap'

const App = () => {
    return (
        <div>
            <h1 className='text-center'>GOOGLE MAPS API with REACT JS</h1>
            <div className='container'>
                <p className='mb-0'>MAPS</p>
                <GoogleMap />
            </div>
        </div>
    )
}

export default App
