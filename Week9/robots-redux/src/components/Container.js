import React, { Component } from 'react'
import { connect } from 'react-redux'
import { filterRobots, populateRobots } from '../redux/actions'
import Robot from './Robot'

class Container extends Component {
    componentDidMount() {
        // if (!this.props.robots.length) {
        //     fetch('https://jsonplaceholder.typicode.com/users')
        //         .then((res) => res.json())
        //         .then((robots) => this.props.populateRobots(robots))
        //         .catch((err) => console.log(err))
        // }
        this.props.populateRobots()
    }

    render() {
        const { robots, searchText, filterRobots, filteredRobots } = this.props

        return (
            <>
                <div className='search-text'>
                    <input
                        placeholder='Search robots'
                        type='search'
                        value={searchText}
                        onChange={filterRobots}
                    />
                </div>
                <div className='robots'>
                    {(!filteredRobots.length ? robots : filteredRobots).map((robot) => {
                        return <Robot key={robot.id} {...robot} />
                    })}
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        robots: state.robots,
        filteredRobots: state.filteredRobots,
        searchText: state.searchText,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        filterRobots: (e) => dispatch(filterRobots(e.target.value)),
        populateRobots: () => dispatch(populateRobots()),
        // populateRobots: (robots) => dispatch(populateRobots(robots)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)
