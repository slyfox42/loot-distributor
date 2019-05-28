import { combineReducers } from 'redux'
import itemsReducer from './items'
import languageReducer from './language'
import playersReducer from './players'
import resultsReducer from './results'

export default combineReducers({
  languageReducer,
  itemsReducer,
  playersReducer,
  resultsReducer
})
