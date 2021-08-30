import React, { Component } from 'react'
import { connect } from 'react-redux'
import Person from './Person'
import Button from './Button'
import Result from './Result'
import { changeFname, changeSname } from '../redux/actions'

class LoveCalculator extends Component {
    render() {
        const { fname, sname, changeFname, changeSname } = this.props

        return (
            <div>
                <Person num={1} value={fname} handleChange={changeFname} />
                <Person num={2} value={sname} handleChange={changeSname} />
                <Button />
                <Result />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        fname: state.fname,
        sname: state.sname,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeFname: (e) => dispatch(changeFname(e)),
        changeSname: (e) => dispatch(changeSname(e)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoveCalculator)
