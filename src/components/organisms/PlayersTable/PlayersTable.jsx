import './PlayersTable.scss'
import { APP_DESCRIPTIONS, INPUT_SANITIZE_REGEXP } from '../../../constants'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Button, { BUTTON_TYPES } from '../../atoms/Button'
import ContentWrapper from '../../molecules/ContentWrapper'
import PlayerList from '../../molecules/PlayerList'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import TextField from '../../atoms/TextField'
import playerActions from '../../../actions/player'
import uuid from 'uuid'

const PlayersTable = ({
  players,
  addPlayerToList,
  removePlayerFromList,
  language
}) => {
  const [playerName, setPlayerName] = useState('')

  const handleChange = value =>
    setPlayerName(value.replace(INPUT_SANITIZE_REGEXP, ''))

  const createPlayer = () => {
    if (!playerName) {
      return
    }
    const uniqueID = uuid()
    setPlayerName('')
    addPlayerToList({ name: playerName, uniqueID })
  }
  const removePlayer = e => {
    const uniqueID = e.target.getAttribute('unique-id')
    removePlayerFromList(uniqueID)
  }
  const header = (
    <div className="players-table-header">
      <TextField
        id="players-text-field"
        fullWidth={false}
        placeholder={APP_DESCRIPTIONS[language].playerPlaceholder}
        onChange={handleChange}
        value={playerName}
        onKeyPress={e => (e.charCode === 13 ? createPlayer() : null)}
      />
      <Button
        appearance={BUTTON_TYPES.PRIMARY}
        onClick={() => {
          const textField = document.getElementById('players-text-field')
          createPlayer(textField)
        }}
      >
        {APP_DESCRIPTIONS[language].addPlayerButton}
      </Button>
    </div>
  )
  return (
    <div className="players-table">
      <ContentWrapper header={header}>
        <div className="players-table-content">
          <PlayerList playerList={players} onClick={removePlayer} />
        </div>
      </ContentWrapper>
    </div>
  )
}

PlayersTable.propTypes = {
  players: PropTypes.array,
  addPlayerToList: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired,
  removePlayerFromList: PropTypes.func.isRequired
}

PlayersTable.defaultProps = {
  players: []
}

export default connect(
  state => {
    return {
      players: state.playersReducer.players
    }
  },
  dispatch => bindActionCreators(playerActions, dispatch)
)(PlayersTable)
