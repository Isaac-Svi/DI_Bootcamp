import React from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from '../redux/actions'

const Counter = ({ counter, increment, decrement }) => {
    const incrementIfOdd = () => {
        if (counter % 2) {
            increment()
        }
    }

    const incrementAsync = () => {
        setTimeout(() => {
            increment()
        }, 1000)
    }

    return (
        <div>
            <span>Clicked: {counter} times</span>{' '}
            <button onClick={increment}>+</button>{' '}
            <button onClick={decrement}>-</button>{' '}
            <button onClick={incrementIfOdd}>Increment if odd</button>{' '}
            <button onClick={incrementAsync}>Increment async</button>{' '}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch(increment()),
        decrement: () => dispatch(decrement()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
