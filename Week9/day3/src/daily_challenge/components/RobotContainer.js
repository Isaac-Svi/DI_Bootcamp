import React, { Component } from 'react'
import { connect } from 'react-redux'
import { populateRobots } from '../redux/actions'

const styles = {
    robotsContainer: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, 300px)',
        gap: '20px',
    },
    robot: {
        borderRadius: '10px',
        boxShadow: '0 4px 8px -3px rgba(0, 0, 0, 0.5)',
        height: '350px',
        textAlign: 'center',
    },
    robotImage: {
        width: '200px',
    },
}

class RobotContainer extends Component {
    componentDidMount() {
        this.props.dispatch(populateRobots())
    }
    render() {
        return (
            <div style={styles.robotsContainer}>
                {this.props.robots.map(({ id, name, email, image }) => {
                    return (
                        <div style={styles.robot} key={id}>
                            <img
                                style={styles.robotImage}
                                src={image}
                                alt='robot'
                            />
                            <h2>{name}</h2>
                            <p>{email}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        robots: state.filteredRobots,
    }
}

export default connect(mapStateToProps)(RobotContainer)
