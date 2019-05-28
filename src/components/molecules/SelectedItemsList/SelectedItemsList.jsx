import './SelectedItemsList.scss'
import Item from '../../atoms/SelectableItem'
import PropTypes from 'prop-types'
import React from 'react'

const SelectedItemsList = ({
  itemList,
  removeItem,
  customClass,
  showCounter
}) => {
  const items = itemList.map((item, idx) => {
    return (
      <div key={`${item.objectID}-${idx}`} className="selected-item-container">
        {showCounter && (
          <span
            className="material-icons remove-item-button"
            onClick={removeItem(item)}
          >
            clear
          </span>
        )}
        <span className="quantity-counter">{item.quantity}</span>
        <Item obj={item} customClass={customClass} showCounter={showCounter} />
      </div>
    )
  })

  return <div className="list">{items}</div>
}

SelectedItemsList.propTypes = {
  itemList: PropTypes.array.isRequired,
  removeItem: PropTypes.func,
  showCounter: PropTypes.bool,
  customClass: PropTypes.string
}

SelectedItemsList.defaultProps = {
  customClass: '',
  removeItem: () => {},
  showCounter: false
}

export default SelectedItemsList
