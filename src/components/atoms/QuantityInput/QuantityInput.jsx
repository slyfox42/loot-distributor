import './QuantityInput.scss'
import PropTypes from 'prop-types'
import React, { useState } from 'react'

const QuantityInput = ({ id, item, updateItemQuantity }) => {
  const [quantity, setQuantity] = useState('')
  const handleChange = e => {
    const value = e.target.value.replace(/[^0-9]/gi, '')
    setQuantity(value)
  }
  const addQuantity = () => {
    const inputElement = document.getElementById(id)
    const { value } = inputElement
    if (!value) {
      return updateItemQuantity({
        item,
        quantity: item.quantity + 1
      })
    }
    setQuantity('')
    updateItemQuantity({
      item,
      quantity: item.quantity + parseInt(value)
    })
  }
  const removeQuantity = () => {
    const inputElement = document.getElementById(id)
    const { value } = inputElement
    if (!value) {
      return updateItemQuantity({
        item,
        quantity: item.quantity - 1 || 1
      })
    }
    setQuantity('')
    const newQuantity = item.quantity - parseInt(value)
    updateItemQuantity({
      item,
      quantity: newQuantity > 1 ? newQuantity : 1
    })
  }
  const onKeyPress = e => (e.charCode === 13 ? addQuantity() : null)
  return (
    <div className="quantity-input-container">
      <span className="material-icons quantity-button" onClick={addQuantity}>
        add
      </span>
      <input
        id={id}
        type="text"
        className="quantity-input"
        maxLength="3"
        value={quantity}
        placeholder="0"
        onChange={handleChange}
        onKeyPress={onKeyPress}
      />
      <span className="material-icons quantity-button" onClick={removeQuantity}>
        remove
      </span>
    </div>
  )
}

QuantityInput.propTypes = {
  item: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  updateItemQuantity: PropTypes.func.isRequired
}

export default QuantityInput
