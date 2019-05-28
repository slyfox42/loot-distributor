import { compose, createStore } from 'redux'
import rootReducer from '../reducers'

export default () => {
  const middlewares = []

  if (
    typeof window !== 'undefined' &&
    window.window.__REDUX_DEVTOOLS_EXTENSION__
  ) {
    middlewares.push(window.window.__REDUX_DEVTOOLS_EXTENSION__())
  }

  return createStore(rootReducer, undefined, compose(...middlewares))
}
