import React from 'react'
import { connect } from 'react-redux'
import { onAgeUp, onAgeDown } from '../redux/actions'

const AgeCounter = ({ age, onAgeUp, onAgeDown }) => {
    return (
        <>
            <span>{age}</span>
            <button onClick={() => onAgeUp(age)}>Age up</button>
            <button onClick={() => onAgeDown(age)}>Age down</button>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        age: state.age,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAgeUp: (age) => dispatch(onAgeUp(age)),
        onAgeDown: (age) => dispatch(onAgeDown(age)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AgeCounter)
