import { createStore } from 'redux'
import { transactionReducer } from './reducers'

export default createStore(transactionReducer)
