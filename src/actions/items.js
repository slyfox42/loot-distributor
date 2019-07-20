import { createAction } from 'redux-act'

export default {
  selectCategory: createAction('selected item category'),
  selectTier: createAction('selected item tier'),
  clickedItem: createAction('clicked item'),
  updateSearchQuery: createAction('updated search query'),
  updateDisplayList: createAction('updated filtered list'),
  clearFilters: createAction('cleared item filters'),
  addToSelectedItems: createAction('updated selection list'),
  removeFromselectedItems: createAction('removed item from selection list'),
  clearSelectedItems: createAction('cleared selection list'),
  selectQualityPreference: createAction('selected quality preference'),
  updateItemQuantity: createAction('updated item quantity'),
  updateItemPrice: createAction('updated item price'),
  selectMarketSource: createAction('selected market source')
}
