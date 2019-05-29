import './LogsDialog.scss'
import { DialogContainer } from 'react-md'
import Button, { BUTTON_TYPES } from '../Button'
import PropTypes from 'prop-types'
import React, { useState } from 'react'

const LogsDialog = () => {
  const [visible, setVisibility] = useState(false)
  const changeVisibility = () => setVisibility(!visible)
  return (
    <div>
      <Button appearance={BUTTON_TYPES.SUCCESS} onClick={changeVisibility}>
        Import chest logs
      </Button>
      <DialogContainer
        id="simple-list-dialog"
        visible={visible}
        title="Simple List Dialog"
        onHide={changeVisibility}
      >
        <textarea />
      </DialogContainer>
    </div>
  )
}

export default LogsDialog
