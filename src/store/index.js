import { createStore, applyMiddleware } from 'redux'
import sagaCreator from 'redux-saga'
import reducers from '../redux'
import allGenerators from '../saga'


const saga=sagaCreator()
export const store = createStore(reducers, {},applyMiddleware(saga))
saga.run(allGenerators)
