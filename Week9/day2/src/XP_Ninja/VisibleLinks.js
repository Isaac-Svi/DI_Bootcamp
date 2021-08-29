import React from 'react'
import FilterLink from './FilterLink'
import { VISIBILITY_FILTERS } from './redux/constants'

const { GET_ALL, GET_ACTIVE, GET_COMPLETE } = VISIBILITY_FILTERS

const VisibleLinks = () => {
    return (
        <div>
            <FilterLink filter={GET_ALL}>All</FilterLink>
            <FilterLink filter={GET_ACTIVE}>Active</FilterLink>
            <FilterLink filter={GET_COMPLETE}>Completed</FilterLink>
        </div>
    )
}

export default VisibleLinks
