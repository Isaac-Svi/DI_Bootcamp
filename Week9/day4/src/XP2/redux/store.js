import { createStore, applyMiddleware } from 'redux'
import { logAction } from '../middleware/logAction'
import reducers from './reducers'

export default createStore(reducers, applyMiddleware(logAction))
