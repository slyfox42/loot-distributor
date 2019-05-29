import './ItemPrice.scss'
import PropTypes from 'prop-types'
import React, { useState } from 'react'

const ItemPrice = ({ id, item, updateItemPrice }) => {
  const [price, setPrice] = useState(item.averagePrice)
  const handleChange = e => {
    const value = e.target.value.replace(/[^0-9]/gi, '')
    setPrice(value)
  }
  const onKeyPress = e =>
    e.charCode === 13 ? updateItemPrice(item, price) : null
  return (
    <div className="item-price-container">
      <img
        id={id}
        className="silver-icon"
        draggable="false"
        alt="silver-icon"
        src={require('../../../images/silver.png')}
      />
      <input
        type="text"
        value={price}
        onChange={handleChange}
        onBlur={() => updateItemPrice(item, price)}
        onKeyPress={onKeyPress}
      />
    </div>
  )
}

ItemPrice.propTypes = {
  item: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  updateItemPrice: PropTypes.func.isRequired
}

export default ItemPrice
