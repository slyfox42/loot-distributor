import './ItemPrice.scss'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'

const ItemPrice = ({ id, item, updateItemPrice }) => {
  const { averagePrice } = item
  const [price, setPrice] = useState(Math.floor(averagePrice))
  useEffect(
    () => {
      if (price !== averagePrice) {
        setPrice(Math.floor(item.averagePrice))
      }
    },
    [averagePrice]
  )
  const handleChange = e => {
    const value = e.target.value.replace(/[^0-9]/gi, '')
    setPrice(parseInt(value))
  }
  const onKeyPress = e => {
    if (e.charCode === 13) {
      document.activeElement.blur()
      updateItemPrice({ item, price })
    }
  }
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
        className={
          item.averagePrice !== 0 ? 'accurate-price' : 'inaccurate-price'
        }
        value={price}
        onChange={handleChange}
        onBlur={() => updateItemPrice({ item, price })}
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
