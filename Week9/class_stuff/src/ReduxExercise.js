import React, { Component } from 'react'
import { connect } from 'react-redux'
import Child from './components/Child'
import { changeI1, changeI2, changeInput } from './redux/actions'

class ReduxExercise extends Component {
    constructor(props) {
        super(props)

        // this.state = {
        //     i1: 'text 1',
        //     i2: 'text 2',
        // }
    }

    handleChange = (e) => {
        // this.setState({ i1: e.target.value })
        this.props.handleChange(e)
    }

    render() {
        // const { i1, i2 } = this.state

        // since i1 and i2 are coming from Redux store, we get them
        // as props in our component instead of state
        const { i1, i2 } = this.props

        return (
            <div>
                <h1>Redux Simple Example</h1>
                <p>This is property 1: {i1}</p>
                <p>This is property 2: {i2}</p>
                <input
                    type='text'
                    value={i1}
                    onChange={this.handleChange}
                    name='I1'
                    placeholder='Input 1'
                />
                <input
                    type='text'
                    value={i2}
                    onChange={this.handleChange}
                    name='I2'
                    placeholder='Input 2'
                />
                <h1>Child</h1>
                {/* <Child pOne={i1} pTwo={i2} changeOne={this.props.handleChange1} /> */}
                <Child />
            </div>
        )
    }
}

// callback function provided to Redux to extract target state from the
// Redux store to be passed as props in the target component
const mapStateToProps = (state) => {
    return { i1: state.textReducer.i1, i2: state.textReducer.i2 }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleChange: (e) => {
            const { name, value } = e.target
            return dispatch(changeInput({ type: name, value }))
        },
        handleChange1: (e) => dispatch(changeI1(e.target.value)),
        handleChange2: (e) => dispatch(changeI2(e.target.value)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxExercise)
// if mapStateToProps or mapDispatchToProps isn't being used, you can replace with null
// if you only need state, just do mapStateToProps, and mapDispatchToProps can be null and vice versa
