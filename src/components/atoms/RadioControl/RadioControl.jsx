import './RadioControl.scss'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import React from 'react'
import itemsActions from '../../../actions/items'

const RadioControl = ({ selectPricesOption, currentPrices }) => {
  const handleChange = ({ target }) => {
    if (target.id === 'currentPrices') {
      const averageSwitch = document.querySelector('#averagePrices')
      averageSwitch.checked = !averageSwitch.checked
    }
    if (target.id === 'averagePrices') {
      const currentSwitch = document.querySelector('#currentPrices')
      currentSwitch.checked = !currentSwitch.checked
    }
    selectPricesOption(!currentPrices)
  }
  return (
    <div className="radio-checkbox">
      <div className="switch">
        <input
          type="checkbox"
          id="currentPrices"
          className="switch-input"
          name="priceOption"
          value="currentPrices"
          defaultChecked={true}
          onChange={handleChange}
        />
        <label htmlFor="currentPrices" className="switch-label">
          Current Prices
        </label>
      </div>
      <div className="switch">
        <input
          type="checkbox"
          id="averagePrices"
          name="priceOption"
          value="averagePrices"
          className="switch-input"
          onChange={handleChange}
        />
        <label htmlFor="averagePrices" className="switch-label">
          Average Prices
        </label>
      </div>
    </div>
  )
}

RadioControl.propTypes = {
  selectPricesOption: PropTypes.func.isRequired,
  currentPrices: PropTypes.bool.isRequired
}

export default connect(
  state => {
    return {
      currentPrices: state.itemsReducer.currentPrices,
      language: state.languageReducer.language
    }
  },
  dispatch => bindActionCreators(itemsActions, dispatch)
)(RadioControl)
