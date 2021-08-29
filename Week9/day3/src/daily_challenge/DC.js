import React from 'react'
import { Provider } from 'react-redux'
import RobotContainer from './components/RobotContainer'
import SearchHeader from './components/SearchHeader'
import store from './redux/store'

const DC = () => {
    return (
        <Provider store={store}>
            <SearchHeader />
            <RobotContainer />
        </Provider>
    )
}

export default DC
