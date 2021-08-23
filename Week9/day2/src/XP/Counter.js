import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DECREASE_COUNT, INCREASE_COUNT } from './actions'

class Counter extends Component {
    render() {
        const { count, plusOne, minusOne } = this.props

        return (
            <div>
                <button onClick={plusOne}>+</button>
                <span>{count}</span>
                <button onClick={minusOne}>-</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        count: state.count,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        plusOne: () => dispatch(INCREASE_COUNT),
        minusOne: () => dispatch(DECREASE_COUNT),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
