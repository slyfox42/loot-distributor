import './ItemsTable.scss'
import {
  APP_DESCRIPTIONS,
  ITEM_CATEGORIES,
  NO_QUALITY_CATEGORIES
} from '../../../constants'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Button, { BUTTON_TYPES } from '../../atoms/Button'
import CheckBox from '../../atoms/CheckBox'
import ContentWrapper from '../../molecules/ContentWrapper'
import ItemList from '../../molecules/ItemDisplayList'
import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import SearchBar from '../../atoms/SearchBar'
import SelectField from '../../atoms/SelectField'
import fetchAveragePrice from '../../../utils/fetchAveragePrice'
import itemsActions from '../../../actions/items'
import uuid from 'uuid'

const ItemsTable = ({
  selection,
  objectCatalogue,
  selectCategory,
  selectTier,
  updateDisplayList,
  clickedItem,
  addToSelectedItems,
  clearFilters,
  language
}) => {
  const { tier, category, displayList, query, askForQuality } = selection
  const tierList = ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8']
  useEffect(
    () => {
      if (!query && !tier && !category) {
        if (displayList.length) {
          updateDisplayList([])
        }
        return
      }
      const filteredList = objectCatalogue
        .filter(item => (category ? item.category === category : item))
        .filter(item =>
          tier ? item.objectID.startsWith(tier.toUpperCase()) : item
        )
        .filter(item =>
          query && query.length > 1
            ? item.objectName.toLowerCase().includes(query.toLowerCase())
            : item
        )
        .slice(0, 40)

      updateDisplayList(filteredList)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [query, tier, category]
  )
  const addItemToSelection = async e => {
    if (e.target.classList.contains('selectable-item')) {
      const objectID = e.target.getAttribute('object-id')
      const objectName = e.target.getAttribute('object-name')
      const category = e.target.getAttribute('category')
      const imgID = e.target.getAttribute('imageid')
      if (!askForQuality || NO_QUALITY_CATEGORIES.includes(category)) {
        const averagePrice = await fetchAveragePrice(objectID)
        const uniqueID = uuid()

        return addToSelectedItems([
          {
            uniqueID,
            objectID,
            objectName,
            imgID,
            averagePrice,
            quantity: 1
          }
        ])
      }
      clickedItem({
        objectID,
        objectName,
        imgID
      })
    }
    if (e.target.getAttribute('role') === 'button') {
      const quality = e.target.innerText
      const { objectID, objectName } = selection.clickedItem
      const newName = `${objectName} ${quality}`
      const uniqueID = uuid()
      const averagePrice = await fetchAveragePrice(objectID)

      addToSelectedItems([
        {
          uniqueID,
          objectID,
          objectName: newName,
          averagePrice,
          quantity: 1
        }
      ])
    }
  }

  const header = (
    <div className="item-selection-header">
      <div className="selection-fields">
        <SelectField
          id={'0'}
          items={ITEM_CATEGORIES}
          value={category}
          placeholder={APP_DESCRIPTIONS[language].categoryPlaceholder}
          onChange={val => selectCategory(val)}
        />
        <SelectField
          id={'1'}
          items={tierList}
          value={tier}
          placeholder={APP_DESCRIPTIONS[language].tierPlaceholder}
          onChange={val => selectTier(val)}
        />
      </div>
      <div className="search-bar-container">
        <SearchBar items={objectCatalogue} />
        <Button appearance={BUTTON_TYPES.ERROR} onClick={() => clearFilters()}>
          {APP_DESCRIPTIONS[language].resetButton}
        </Button>
      </div>
      <CheckBox
        label={APP_DESCRIPTIONS[language].askForQualityCheckbox}
        id="quality-checkbox"
        name="quality-checkbox"
      />
    </div>
  )
  return (
    <div className="item-selection">
      <ContentWrapper header={header} className="item-selection">
        <div className="item-selection-content">
          <ItemList
            itemList={displayList}
            onClick={addItemToSelection}
            askForQuality={askForQuality}
          />
        </div>
      </ContentWrapper>
    </div>
  )
}

ItemsTable.propTypes = {
  objectCatalogue: PropTypes.array.isRequired,
  selection: PropTypes.object.isRequired,
  language: PropTypes.string.isRequired,
  selectCategory: PropTypes.func.isRequired,
  selectTier: PropTypes.func.isRequired,
  updateDisplayList: PropTypes.func.isRequired,
  clickedItem: PropTypes.func.isRequired,
  addToSelectedItems: PropTypes.func.isRequired,
  clearFilters: PropTypes.func.isRequired,
  updateItemQuantity: PropTypes.func.isRequired
}

export default connect(
  state => {
    return {
      selection: state.itemsReducer,
      language: state.languageReducer.language
    }
  },
  dispatch => bindActionCreators(itemsActions, dispatch)
)(ItemsTable)
