import { createAction } from 'redux-act'

export default {
  addPlayerToList: createAction('added player name'),
  removePlayerFromList: createAction('removed player name')
}
