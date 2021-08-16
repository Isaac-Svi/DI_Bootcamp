import React from 'react'
import Garage from './Garage'

// const Car = () => {
//     return <h2>Hi, I am a Car!</h2>
// }

class Car extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            color: 'red',
        }
    }

    render() {
        const {
            carinfo: { name, model },
        } = this.props

        return (
            <>
                <h2>Hi, I am a {this.state.color} Car!</h2>
                <Garage size='small' />
                <p>
                    I am a {name} {model} by the way.
                </p>
            </>
        )
    }
}

export default Car
