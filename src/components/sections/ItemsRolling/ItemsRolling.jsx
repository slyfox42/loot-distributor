import './ItemsRolling.scss'
import { APP_DESCRIPTIONS } from '../../../constants'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Button, { BUTTON_TYPES } from '../../atoms/Button'
import PlayersTable from '../../organisms/PlayersTable'
import PropTypes from 'prop-types'
import React from 'react'
import ResultsTable from '../../organisms/ResultsTable'
import resultsActions from '../../../actions/results'
import roll from '../../../utils/roll'

const ItemsRolling = ({ loot, players, updateResultsList, language }) => {
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
        onClick={() => {
          const result = roll(players, loot)
          if (result) {
            updateResultsList(result)
          }
        }}
      >
        Roll
      </Button>
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
