import React from 'react'
import { connect } from 'react-redux'
import { SET_VISIBILITY_FILTER } from './redux/constants'

const FilterLink = ({ active, filter, children, dispatch }) => {
    return (
        <button
            disabled={active}
            onClick={() => dispatch({ type: SET_VISIBILITY_FILTER, filter })}
        >
            {children}
        </button>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.visibilityFilter,
    }
}

export default connect(mapStateToProps, null)(FilterLink)
