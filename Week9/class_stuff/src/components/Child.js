import React from 'react'
import { connect } from 'react-redux'
import { changeI1 } from '../redux/actions'

const Child = (props) => {
    const { pOne, pTwo, changeOne } = props

    return (
        <>
            <p>property_one: {pOne}</p>
            <p>property_two: {pTwo}</p>
            <input type='text' onChange={changeOne} />
        </>
    )
}

const mapStateToProps = (state) => {
    return { pOne: state.textReducer.i1, pTwo: state.textReducer.i2 }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeOne: (e) => dispatch(changeI1(e.target.value)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Child)
