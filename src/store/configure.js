import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import * as modules from './modules'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

export default function configureStore(preloadedState) {

    const reducers = combineReducers(modules)
    const logger = createLogger()
    const middlewares = [logger, thunk]
    const enhancer = compose(applyMiddleware(...middlewares))


    const devTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;


    return createStore(reducers, preloadedState, devTools(applyMiddleware(...middlewares)))
    // return createStore(reducers, applyMiddleware(logger))

}