import './LootTable.scss'
import { APP_DESCRIPTIONS, CITIES, LOCALES } from '../../../constants'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { multiplyLoot } from '../../../utils/lootMultiplication'
import Button, { BUTTON_TYPES } from '../../atoms/Button'
import ContentWrapper from '../../molecules/ContentWrapper'
import LogsDialog from '../../atoms/LogsDialog'
import PropTypes from 'prop-types'
import RadioControl from '../../atoms/RadioControl'
import React from 'react'
import SelectField from '../../atoms/SelectField'
import SelectedItemsList from '../../molecules/SelectedItemsList'
import itemsActions from '../../../actions/items'

const LootTable = ({
  selection,
  addToSelectedItems,
  removeFromselectedItems,
  clearSelectedItems,
  selectMarketSource,
  language
}) => {
  let { selectedItems, marketSource } = selection
  const grandtotal = Math.floor(
    multiplyLoot(selectedItems).reduce(
      (acc, curr) => acc + curr.averagePrice,
      0
    )
  ).toLocaleString(LOCALES[language])
  const header = (
    <div className="loot-table-header">
      <div className="text-container">
        {APP_DESCRIPTIONS[language].selectedItems}
        <div className="grandtotal-text">
          {APP_DESCRIPTIONS[language].estimatedGrandTotal}
          <div className="grandtotal">{grandtotal}</div>
        </div>
      </div>
      <div className="buttons-container">
        <LogsDialog
          addToSelectedItems={addToSelectedItems}
          language={language}
        />
        <SelectField
          id={'0'}
          items={CITIES}
          value={marketSource}
          placeholder="Select market source"
          onChange={val => selectMarketSource(val)}
        />
        <Button
          appearance={BUTTON_TYPES.ERROR}
          onClick={() => clearSelectedItems()}
          customClass="clear-button"
        >
          {APP_DESCRIPTIONS[language].clearButton}
        </Button>
      </div>
      <RadioControl />
    </div>
  )
  const removeItem = el => () => removeFromselectedItems(el.objectName)
  return (
    <div className="loot-table">
      <ContentWrapper header={header}>
        <div className="loot-table-content">
          <SelectedItemsList
            itemList={selectedItems}
            removeItem={removeItem}
            showCounter={true}
          />
        </div>
      </ContentWrapper>
    </div>
  )
}

LootTable.propTypes = {
  itemList: PropTypes.array,
  selection: PropTypes.object.isRequired,
  language: PropTypes.string.isRequired,
  removeFromselectedItems: PropTypes.func.isRequired,
  clearSelectedItems: PropTypes.func.isRequired,
  addToSelectedItems: PropTypes.func.isRequired,
  selectMarketSource: PropTypes.func.isRequired
}

LootTable.defaultProps = {
  itemList: []
}

export default connect(
  state => ({
    selection: state.itemsReducer
  }),
  dispatch => bindActionCreators(itemsActions, dispatch)
)(LootTable)
