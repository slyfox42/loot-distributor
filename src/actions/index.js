import { createAction } from 'redux-act'

export default {
  selectCategory: createAction('selected item category'),
  selectTier: createAction('selected item tier')
}
