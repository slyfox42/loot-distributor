import './LanguageSelection.scss'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Button, { BUTTON_TYPES } from '../Button'
import PropTypes from 'prop-types'
import React from 'react'
import languageActions from '../../../actions/language'

const LanguageSelection = ({ setLanguage }) => {
  return (
    <div className="language-selection">
      <Button
        appearance={BUTTON_TYPES.PRIMARY}
        customClass="round-button"
        onClick={() => setLanguage('english')}
      >
        EN
      </Button>
      <Button
        appearance={BUTTON_TYPES.PRIMARY}
        customClass="round-button"
        onClick={() => setLanguage('italian')}
      >
        IT
      </Button>
      <Button
        appearance={BUTTON_TYPES.PRIMARY}
        customClass="round-button"
        onClick={() => setLanguage('portuguese')}
      >
        PT
      </Button>
    </div>
  )
}

LanguageSelection.propTypes = {
  setLanguage: PropTypes.func.isRequired
}

export default connect(
  state => state,
  dispatch => bindActionCreators(languageActions, dispatch)
)(LanguageSelection)
