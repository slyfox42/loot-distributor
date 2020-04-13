import './Donation.scss'
import { APP_DESCRIPTIONS } from '../../../constants'
import { connect } from 'react-redux'
import Button, { BUTTON_TYPES } from '../../atoms/Button'
import PropTypes from 'prop-types'
import React from 'react'

const Donation = ({ language }) => {
  return (
    <div className="donation-section">
      <p className="donation-paragraph">
        {APP_DESCRIPTIONS[language].donationParagraph}
      </p>
      <Button
        appearance={BUTTON_TYPES.INVERTED}
        customClass="donation-button"
        onClick={() =>
          window.location.replace(process.env.REACT_APP_DONATION_URL)
        }
      >
        {APP_DESCRIPTIONS[language].donateButton}
      </Button>
    </div>
  )
}

Donation.propTypes = {
  language: PropTypes.string.isRequired
}

export default connect(state => ({
  language: state.languageReducer.language
}))(Donation)
