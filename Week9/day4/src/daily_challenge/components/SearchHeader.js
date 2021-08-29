import React from 'react'
import { connect } from 'react-redux'
import { changeInput } from '../redux/actions'

const SearchHeader = ({ input, changeInput }) => {
    return (
        <div>
            <h1>ROBO-CHARACTERS</h1>
            <input type='search' value={input} onChange={changeInput} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        input: state.input,
        robots: state.robots,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeInput: (e) => dispatch(changeInput(e)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchHeader)
