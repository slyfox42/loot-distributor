import { createAction } from 'redux-act'

export default {
  updateResultsList: createAction('updated results list'),
  clearResults: createAction('cleared results list')
}
