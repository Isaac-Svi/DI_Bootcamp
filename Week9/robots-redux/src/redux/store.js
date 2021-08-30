import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { robotsReducer } from './reducers'

export default createStore(robotsReducer, applyMiddleware(logger, thunk))
