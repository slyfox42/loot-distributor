import './SearchBar.scss'
import { APP_DESCRIPTIONS, INPUT_SANITIZE_REGEXP } from '../../../constants'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import React from 'react'
import itemActions from '../../../actions/items'

const SearchBar = ({ selection, language, updateSearchQuery }) => {
  const { query } = selection

  return (
    <input
      type="text"
      className="search-bar"
      placeholder={APP_DESCRIPTIONS[language].searchBarPlaceholder}
      value={query}
      onChange={e => {
        updateSearchQuery(e.target.value.replace(INPUT_SANITIZE_REGEXP, ''))
      }}
    />
  )
}

SearchBar.propTypes = {
  selection: PropTypes.object.isRequired,
  language: PropTypes.string.isRequired,
  updateSearchQuery: PropTypes.func.isRequired
}

export default connect(
  state => {
    return {
      selection: state.itemsReducer,
      language: state.languageReducer.language
    }
  },
  dispatch => bindActionCreators(itemActions, dispatch)
)(SearchBar)
