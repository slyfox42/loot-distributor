import './LogsDialog.scss'
import { DialogContainer } from 'react-md'
import Button, { BUTTON_TYPES } from '../Button'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import parseChestLogs from '../../../utils/parseChestLogs'

const LogsDialog = ({ addToSelectedItems }) => {
  const [visible, setVisibility] = useState(false)
  const changeVisibility = () => setVisibility(!visible)
  const onClick = async () => {
    const logs = document.getElementById('paste-logs').value
    changeVisibility()
    const itemList = await parseChestLogs(logs)
    addToSelectedItems(itemList)
  }
  return (
    <div>
      <Button appearance={BUTTON_TYPES.SUCCESS} onClick={changeVisibility}>
        Import chest logs
      </Button>
      <DialogContainer
        id="logs-dialog"
        visible={visible}
        aria-labelledby="logs-dialog"
        onHide={changeVisibility}
      >
        <div className="dialog-title">
          Paste the chest logs and press &quot;Import&quot;
        </div>
        <textarea
          id="paste-logs"
          onKeyPress={e => (e.charCode === 13 ? onClick() : null)}
        />
        <Button appearance={BUTTON_TYPES.SUCCESS} onClick={onClick}>
          Import
        </Button>
      </DialogContainer>
    </div>
  )
}

LogsDialog.propTypes = {
  addToSelectedItems: PropTypes.func.isRequired
}

export default LogsDialog
