import './ItemsRolling.scss'
import { APP_DESCRIPTIONS } from '../../../constants'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Button, { BUTTON_TYPES } from '../../atoms/Button'
import PlayersTable from '../../organisms/PlayersTable'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import ResultsTable from '../../organisms/ResultsTable'
import resultsActions from '../../../actions/results'
import roll from '../../../utils/roll'

const ItemsRolling = ({ loot, players, updateResultsList, language }) => {
  const [error, setError] = useState('')

  const checkForErrors = (loot, players) => {
    let errorText = ''
    if (!loot.length) {
      errorText = APP_DESCRIPTIONS[language].lootError
    }
    const missingItem = loot.find(el => el.averagePrice === 0)
    if (missingItem && !errorText) {
      errorText = APP_DESCRIPTIONS[language].pricesError
    }
    if (!players.length && !errorText) {
      errorText = APP_DESCRIPTIONS[language].playersError
    }

    return errorText
  }

  const handleClick = () => {
    const errorText = checkForErrors(loot, players)

    if (errorText) {
      return errorText !== error ? setError(errorText) : null
    }

    const result = roll(players, loot)
    setError('')
    updateResultsList(result)
  }

  return (
    <div className="roll-selection">
      <div className="readme" id="roll-section">
        <p className="header">{APP_DESCRIPTIONS[language].itemRolling}</p>
        <div className="instructions">
          <p>{APP_DESCRIPTIONS[language].itemRollingFirstParagraph}</p>
          <p>{APP_DESCRIPTIONS[language].itemRollingSecondParagraph}</p>
        </div>
      </div>
      <PlayersTable language={language} />
      <Button
        appearance={BUTTON_TYPES.SUCCESS}
        customClass="action-button"
        onClick={handleClick}
      >
        {APP_DESCRIPTIONS[language].rollButton}
      </Button>
      <div className="error-text-container">{error}</div>
      <ResultsTable language={language} />
    </div>
  )
}

ItemsRolling.propTypes = {
  language: PropTypes.string.isRequired,
  loot: PropTypes.array.isRequired,
  players: PropTypes.array.isRequired,
  updateResultsList: PropTypes.func.isRequired,
  clearResults: PropTypes.func.isRequired
}

export default connect(
  state => {
    return {
      loot: state.itemsReducer.selectedItems,
      players: state.playersReducer.players,
      language: state.languageReducer.language
    }
  },
  dispatch => bindActionCreators(resultsActions, dispatch)
)(ItemsRolling)
