import './ItemsSelection.scss'
import { APP_DESCRIPTIONS } from '../../../constants'
import { connect } from 'react-redux'
import Button, { BUTTON_TYPES } from '../../atoms/Button'
import ItemsTable from '../../organisms/ItemsTable'
import LootTable from '../../organisms/LootTable'
import PropTypes from 'prop-types'
import React from 'react'

const objectCatalogue = require('../../../items.json')

const ItemsSelection = ({ language }) => {
  return (
    <div className="loot-selection">
      <div className="readme">
        <p className="header">{APP_DESCRIPTIONS[language].itemSelection}</p>
        <div className="instructions">
          <p>{APP_DESCRIPTIONS[language].itemSelectionFirstParagraph}</p>
          <p>{APP_DESCRIPTIONS[language].itemSelectionSecondParagraph}</p>
          <p>{APP_DESCRIPTIONS[language].itemSelectionThirdParagraph}</p>
        </div>
      </div>
      <div className="selection-tables">
        <ItemsTable objectCatalogue={objectCatalogue} language={language} />

        <LootTable language={language} />
      </div>
      <Button
        appearance={BUTTON_TYPES.SUCCESS}
        customClass="action-button"
        onClick={() => {
          const playersTableElement = document.getElementById('roll-section')
          playersTableElement.scrollIntoView({
            alignToTop: true,
            behavior: 'smooth'
          })
        }}
      >
        {APP_DESCRIPTIONS[language].forwardButton}
      </Button>
    </div>
  )
}

ItemsSelection.propTypes = {
  language: PropTypes.string.isRequired
}

export default connect(state => ({
  language: state.languageReducer.language
}))(ItemsSelection)
