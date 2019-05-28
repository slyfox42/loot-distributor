import './SelectablePlayer.scss'
import PropTypes from 'prop-types'
import React from 'react'
import capitalize from 'lodash/capitalize'

const SelectablePlayer = ({ obj, onClick }) => {
  const name = `${obj.idx + 1}. ${capitalize(obj.name)}`
  return (
    <div
      className="selectable-player"
      onClick={onClick}
      unique-id={obj.uniqueID}
    >
      <p className="player-name no-events">{name}</p>
    </div>
  )
}

SelectablePlayer.propTypes = {
  obj: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
}

export default SelectablePlayer
