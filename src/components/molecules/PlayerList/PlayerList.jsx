import './PlayerList.scss'
import Player from '../../atoms/SelectablePlayer'
import PropTypes from 'prop-types'
import React from 'react'

const PlayerList = ({ playerList, onClick }) => {
  const items = playerList.map((el, idx) => (
    <Player key={el.uniqueID} obj={{ ...el, idx }} onClick={onClick} />
  ))

  return <div className="players-list">{items}</div>
}

PlayerList.propTypes = {
  playerList: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
}

export default PlayerList
