import './ResultsTable.scss'
import { APP_DESCRIPTIONS, LOCALES } from '../../../constants'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Button, { BUTTON_TYPES } from '../../atoms/Button'
import ContentWrapper from '../../molecules/ContentWrapper'
import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import SelectedItemsList from '../../molecules/SelectedItemsList'
import capitalize from 'lodash/capitalize'
import copyResultsToClipboard from '../../../utils/copyResultsToClipboard'
import itemsActions from '../../../actions/items'

const ResultsTable = ({ results, language }) => {
  const header = (
    <div className="results-table-header">
      <div>{APP_DESCRIPTIONS[language].rollResults}</div>
      <Button
        appearance={BUTTON_TYPES.INVERTED}
        customClass="copy-to-clipboard"
        onClick={() => copyResultsToClipboard(results, language)}
      >
        Copy to clipboard
      </Button>
    </div>
  )
  let resultElements = null

  useEffect(
    () => {
      const resultsTable = document.getElementById('results-table')
      if (resultsTable) {
        resultsTable.scrollIntoView({
          alignToTop: true,
          behavior: 'smooth'
        })
      }
    },
    [results]
  )

  if (Object.keys(results).length) {
    resultElements = Object.entries(results).map(([name, value], idx) => {
      return (
        <div className="roll-result" key={`${name}-${idx}`}>
          <div className="winner-info">
            <p className="winner-name">{capitalize(name)}</p>
            <p>
              {APP_DESCRIPTIONS[language].lootEsteem}
              <span className="value-estimate">
                {value.totalValue.toLocaleString(LOCALES[language])}
              </span>
            </p>
          </div>
          <SelectedItemsList
            itemList={value.items}
            onClick={() => {}}
            customClass="not-selectable"
          />
        </div>
      )
    })
  }

  return resultElements ? (
    <div id="results-table">
      <ContentWrapper header={header}>
        <div className="results-table-content">{resultElements}</div>
      </ContentWrapper>
    </div>
  ) : null
}

ResultsTable.propTypes = {
  results: PropTypes.object.isRequired,
  language: PropTypes.string.isRequired
}

export default connect(
  state => {
    return {
      results: state.resultsReducer.results
    }
  },
  dispatch => bindActionCreators(itemsActions, dispatch)
)(ResultsTable)
