import './SelectableItem.scss'
import { IMAGE_BASE_URL } from '../../../constants'
import PropTypes from 'prop-types'
import QuantityInput from '../../atoms/QuantityInput'
import React from 'react'
import classNames from 'classnames'

const SelectableItem = ({ obj, onClick, customClass, showCounter }) => {
  const imageUrl = IMAGE_BASE_URL + (obj.imgID || obj.objectID)
  const classProps = classNames('selectable-item', customClass)
  return (
    <div
      className={classProps}
      onClick={onClick}
      unique-id={obj.uniqueID}
      object-id={obj.objectID}
      imageid={obj.imgID}
      object-name={obj.objectName}
      category={obj.category}
    >
      <img
        className="item-image no-events"
        alt={obj.name}
        src={imageUrl}
        draggable="false"
      />
      {showCounter && <QuantityInput item={obj} id={obj.uniqueID} />}
      <p className="item-description no-events">{obj.objectName}</p>
    </div>
  )
}

SelectableItem.propTypes = {
  obj: PropTypes.object.isRequired,
  onClick: PropTypes.func,
  customClass: PropTypes.string,
  showCounter: PropTypes.bool
}

SelectableItem.defaultProps = {
  onClick: () => {},
  customClass: '',
  showCounter: false
}

export default SelectableItem
