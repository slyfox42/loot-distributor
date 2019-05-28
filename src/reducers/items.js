import { createReducer } from 'redux-act'
import itemActions from '../actions/items'
import u from 'updeep'

const initialState = {
  category: '',
  tier: '',
  query: '',
  askForQuality: true,
  displayList: [],
  selectedItems: [],
  clickedItem: null
}

export default createReducer(
  {
    [itemActions.selectCategory]: (state, payload) =>
      u(
        {
          category: payload
        },
        state
      ),
    [itemActions.selectTier]: (state, payload) =>
      u(
        {
          tier: payload
        },
        state
      ),
    [itemActions.selectQualityPreference]: state =>
      u(
        {
          askForQuality: !state.askForQuality
        },
        state
      ),
    [itemActions.clearFilters]: state =>
      u(
        {
          category: '',
          tier: '',
          displayList: [],
          query: ''
        },
        state
      ),
    [itemActions.updateDisplayList]: (state, payload) =>
      u(
        {
          displayList: payload
        },
        state
      ),
    [itemActions.updateSearchQuery]: (state, payload) =>
      u(
        {
          query: payload
        },
        state
      ),
    [itemActions.clickedItem]: (state, payload) => {
      return u(
        {
          clickedItem: payload
        },
        state
      )
    },
    [itemActions.addToselectedItems]: (state, payload) => {
      return u(
        {
          selectedItems: [...state.selectedItems, payload]
        },
        state
      )
    },
    [itemActions.removeFromselectedItems]: (state, payload) =>
      u(
        {
          selectedItems: state.selectedItems.filter(
            el => el.objectName !== payload
          )
        },
        state
      ),
    [itemActions.clearSelectedItems]: state =>
      u(
        {
          selectedItems: []
        },
        state
      ),
    [itemActions.updateItemQuantity]: (state, { item, quantity }) =>
      u(
        {
          selectedItems: state.selectedItems.map(el =>
            el.uniqueID === item.uniqueID ? { ...el, quantity } : el
          )
        },
        state
      )
  },
  initialState
)
