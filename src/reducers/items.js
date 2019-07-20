import { createReducer } from 'redux-act'
import { distinctLoot } from '../utils/lootMultiplication'
import itemsActions from '../actions/items'
import u from 'updeep'

const initialState = {
  category: '',
  tier: '',
  query: '',
  askForQuality: true,
  displayList: [],
  selectedItems: [],
  clickedItem: null,
  marketSource: 'Caerleon',
  currentPrices: true
}

export default createReducer(
  {
    [itemsActions.selectCategory]: (state, payload) =>
      u(
        {
          category: payload
        },
        state
      ),
    [itemsActions.selectTier]: (state, payload) =>
      u(
        {
          tier: payload
        },
        state
      ),
    [itemsActions.selectQualityPreference]: state =>
      u(
        {
          askForQuality: !state.askForQuality
        },
        state
      ),
    [itemsActions.clearFilters]: state =>
      u(
        {
          category: '',
          tier: '',
          displayList: [],
          query: ''
        },
        state
      ),
    [itemsActions.updateDisplayList]: (state, payload) =>
      u(
        {
          displayList: payload
        },
        state
      ),
    [itemsActions.updateSearchQuery]: (state, payload) =>
      u(
        {
          query: payload
        },
        state
      ),
    [itemsActions.clickedItem]: (state, payload) => {
      return u(
        {
          clickedItem: payload
        },
        state
      )
    },
    [itemsActions.addToSelectedItems]: (state, payload) => {
      return u(
        {
          selectedItems: distinctLoot([...state.selectedItems, ...payload])
        },
        state
      )
    },
    [itemsActions.removeFromselectedItems]: (state, payload) =>
      u(
        {
          selectedItems: state.selectedItems.filter(
            el => el.objectName !== payload
          )
        },
        state
      ),
    [itemsActions.clearSelectedItems]: state =>
      u(
        {
          selectedItems: []
        },
        state
      ),
    [itemsActions.updateItemQuantity]: (state, { item, quantity }) =>
      u(
        {
          selectedItems: state.selectedItems.map(el =>
            el.uniqueID === item.uniqueID ? { ...el, quantity } : el
          )
        },
        state
      ),
    [itemsActions.updateItemPrice]: (state, { item, price }) =>
      u(
        {
          selectedItems: state.selectedItems.map(el =>
            el.uniqueID === item.uniqueID ? { ...el, averagePrice: price } : el
          )
        },
        state
      ),
    [itemsActions.selectMarketSource]: (state, payload) =>
      u(
        {
          marketSource: payload
        },
        state
      ),
    [itemsActions.selectPricesOption]: (state, payload) =>
      u(
        {
          currentPrices: payload
        },
        state
      )
  },
  initialState
)
