import React from 'react'
import { connect } from 'react-redux'
import { getResults } from '../redux/actions'

const Button = ({ fname, sname, getResults }) => {
    return (
        <button onClick={() => getResults({ fname, sname })}>Calculate</button>
    )
}

const mapStateToProps = (state) => {
    return {
        fname: state.fname,
        sname: state.sname,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getResults: (obj) => dispatch(getResults(obj)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Button)
