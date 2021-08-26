import React from 'react'
import { connect } from 'react-redux'
import { filterResults } from '../redux/actions'

const App = ({ searchText, results, filterResults }) => {
    return (
        <div>
            <h2>Search</h2>
            <input type='search' value={searchText} onChange={filterResults} />
            <ul>
                {results.map(({ id, title, url }) => {
                    return (
                        <li key={id}>
                            <a href={url} target='_blank'>
                                {title}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        searchText: state.searchText,
        results: state.results,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        filterResults: (e) => dispatch(filterResults(e)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
