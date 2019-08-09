import './SelectableItem.scss'
import { IMAGE_BASE_URL } from '../../../constants'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ItemPrice from '../ItemPrice'
import PropTypes from 'prop-types'
import QuantityInput from '../../atoms/QuantityInput'
import React from 'react'
import classNames from 'classnames'
import itemsActions from '../../../actions/items'

const SelectableItem = ({
  item,
  onClick,
  customClass,
  showCounter,
  updateItemQuantity,
  updateItemPrice
}) => {
  const { quality } = item
  let imageUrl = IMAGE_BASE_URL + (item.imgID || item.objectID)
  if (quality) {
    imageUrl += `?quality=${quality}`
  }
  const classProps = classNames('selectable-item', customClass)
  return (
    <div className="selectable-item-container">
      <div
        className={classProps}
        onClick={onClick}
        unique-id={item.uniqueID}
        object-id={item.objectID}
        imageid={item.imgID}
        object-name={item.objectName}
        category={item.category}
      >
        <img
          className="item-image no-events"
          alt={item.name}
          src={imageUrl}
          draggable="false"
        />
        {showCounter && (
          <ItemPrice
            item={item}
            id={item.uniqueID}
            updateItemPrice={updateItemPrice}
          />
        )}
        <p className="item-description no-events">{item.objectName}</p>
      </div>
      {showCounter && (
        <QuantityInput
          item={item}
          id={item.uniqueID}
          updateItemQuantity={updateItemQuantity}
        />
      )}
    </div>
  )
}

SelectableItem.propTypes = {
  item: PropTypes.object.isRequired,
  onClick: PropTypes.func,
  updateItemQuantity: PropTypes.func.isRequired,
  updateItemPrice: PropTypes.func.isRequired,
  customClass: PropTypes.string,
  showCounter: PropTypes.bool
}

SelectableItem.defaultProps = {
  onClick: () => {},
  customClass: '',
  showCounter: false
}

export default connect(
  state => {
    return {
      selection: state.itemsReducer
    }
  },
  dispatch => bindActionCreators(itemsActions, dispatch)
)(SelectableItem)
