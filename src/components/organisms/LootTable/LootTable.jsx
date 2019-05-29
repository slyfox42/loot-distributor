import './LootTable.scss'
import { APP_DESCRIPTIONS } from '../../../constants'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Button, { BUTTON_TYPES } from '../../atoms/Button'
import ContentWrapper from '../../molecules/ContentWrapper'
import LogsDialog from '../../atoms/LogsDialog'
import PropTypes from 'prop-types'
import React from 'react'
import SelectedItemsList from '../../molecules/SelectedItemsList'
import itemsActions from '../../../actions/items'

const LootTable = ({
  selection,
  addToSelectedItems,
  removeFromselectedItems,
  clearSelectedItems,
  language
}) => {
  const header = (
    <div className="loot-table-header">
      {APP_DESCRIPTIONS[language].selectedItems}
      <div className="buttons-container">
        <LogsDialog
          addToSelectedItems={addToSelectedItems}
          language={language}
        />
        <Button
          appearance={BUTTON_TYPES.ERROR}
          onClick={() => clearSelectedItems()}
          customClass="clear-button"
        >
          {APP_DESCRIPTIONS[language].clearButton}
        </Button>
      </div>
    </div>
  )
  const removeItem = el => () => removeFromselectedItems(el.objectName)
  return (
    <div className="loot-table">
      <ContentWrapper header={header}>
        <div className="loot-table-content">
          <SelectedItemsList
            itemList={selection.selectedItems}
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
  addToSelectedItems: PropTypes.func.isRequired
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
