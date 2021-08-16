import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
// import Alert from './Exercise1/Alert'
// import Alert from './Exercise2/Alert'
// import Alert from './Exercise3/Alert'
import Alert from './Exercise4/Alert'

const XPP = () => {
    return (
        <>
            {/* <Alert text='OMG! Something really bad has happended!' /> */}
            {/* <Alert show={true} text='OMG! Something really good happended!' />
            <Alert show={false} text='OMG! Something really bad has happended!' /> */}
            {/* <Alert text='This is a primary alert—check it out!' color='red' />
            <Alert text='This is a primary alert—check it out!' color='orange' /> */}
            <Alert text='OMG! Something really bad has happened!' color='red' />
            <Alert text='Well, it is not that bad after all!' color='orange' />
            <Alert text='I am supposed to be green' color='green' />
            <Alert text='Weird color: asdfadsf' color='asdfadsf' />
        </>
    )
}

export default XPP
