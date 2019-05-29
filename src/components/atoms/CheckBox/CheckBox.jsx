import './CheckBox.scss'
import { SelectionControl } from 'react-md'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import React from 'react'
import itemsActions from '../../../actions/items'

const CheckBox = ({ id, name, label, selectQualityPreference }) => (
  <SelectionControl
    id={id}
    name={name}
    label={label}
    type="checkbox"
    onChange={() => selectQualityPreference()}
    defaultChecked
  />
)

CheckBox.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  selectQualityPreference: PropTypes.func.isRequired
}

export default connect(
  state => {
    return {
      language: state.languageReducer.language
    }
  },
  dispatch => bindActionCreators(itemsActions, dispatch)
)(CheckBox)
