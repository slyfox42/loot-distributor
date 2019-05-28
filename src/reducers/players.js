import { createReducer } from 'redux-act'
import playerActions from '../actions/player'
import u from 'updeep'

const initialState = {
  players: []
}

export default createReducer(
  {
    [playerActions.addPlayerToList]: (state, payload) =>
      u(
        {
          players: [...state.players, payload]
        },
        state
      ),
    [playerActions.removePlayerFromList]: (state, payload) =>
      u(
        {
          players: state.players.filter(el => el.uniqueID !== payload)
        },
        state
      )
  },
  initialState
)
