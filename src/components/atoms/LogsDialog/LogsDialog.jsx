import './LogsDialog.scss'
import { APP_DESCRIPTIONS } from '../../../constants'
import { DialogContainer } from 'react-md'
import Button, { BUTTON_TYPES } from '../Button'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import parseChestLogs from '../../../utils/parseChestLogs'

const LogsDialog = ({ addToSelectedItems, language, marketSource }) => {
  const [visible, setVisibility] = useState(false)
  const changeVisibility = () => setVisibility(!visible)
  const onClick = async () => {
    const logs = document
      .getElementById('paste-logs')
      .value.replace(/[^a-z\d\s"/:'-]/gim, '')
    changeVisibility()
    const itemList = await parseChestLogs(logs, marketSource)
    addToSelectedItems(itemList)
  }
  return (
    <div>
      <Button appearance={BUTTON_TYPES.SUCCESS} onClick={changeVisibility}>
        {APP_DESCRIPTIONS[language].openLogsDialogButton}
      </Button>
      <DialogContainer
        id="logs-dialog"
        visible={visible}
        aria-labelledby="logs-dialog"
        onHide={changeVisibility}
      >
        <div className="dialog-title">
          {APP_DESCRIPTIONS[language].logsImportDialogTitle}
        </div>
        <textarea
          id="paste-logs"
          onKeyPress={e => (e.charCode === 13 ? onClick() : null)}
        />
        <Button appearance={BUTTON_TYPES.SUCCESS} onClick={onClick}>
          {APP_DESCRIPTIONS[language].logsImportButton}
        </Button>
      </DialogContainer>
    </div>
  )
}

LogsDialog.propTypes = {
  addToSelectedItems: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired
}

export default LogsDialog
