import React from 'react'
import { connect } from 'react-redux'
import { plusOne, minusOne } from '../redux/actions'

const Counter = (props) => {
    const { plusOne, minusOne, count } = props

    return (
        <div>
            <h1>Counter</h1>
            <div>{count}</div>
            <button onClick={plusOne}>+</button>
            <button onClick={minusOne}>-</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    // because we're using 2 different reducers, we need to specify
    // the reducer we're using from the state
    return { count: state.countReducer.count }
}

const mapDispatchToProps = (dispatch) => {
    return {
        plusOne: () => dispatch(plusOne()),
        minusOne: () => dispatch(minusOne()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
