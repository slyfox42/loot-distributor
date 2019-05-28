import { createReducer } from 'redux-act'
import resultsActions from '../actions/results'

const initialState = {
  results: {}
}

export default createReducer(
  {
    [resultsActions.updateResultsList]: (state, payload) => ({
      ...state,
      results: payload
    }),
    [resultsActions.clearResults]: state => ({
      ...state,
      results: {}
    })
  },
  initialState
)
