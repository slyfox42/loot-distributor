import { createReducer } from 'redux-act'
import languageActions from '../actions/language'
import u from 'updeep'

const initialState = {
  language: 'english'
}

export default createReducer(
  {
    [languageActions.setLanguage]: (state, payload) =>
      u(
        {
          language: payload
        },
        state
      )
  },
  initialState
)
