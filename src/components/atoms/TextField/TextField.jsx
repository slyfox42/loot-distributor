import './TextField.scss'
import 'react-md/lib/Helpers'
import MaterialText from 'react-md/lib/TextFields'
import PropTypes from 'prop-types'
import React from 'react'

const TextField = ({
  id,
  type,
  required,
  fullWidth,
  placeholder,
  value,
  onChange,
  size,
  onKeyPress
}) => {
  return (
    <MaterialText
      id={id}
      required={required}
      customSize="small"
      size={size}
      fullWidth={fullWidth}
      onKeyPress={onKeyPress}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      type={type}
      className="text-field"
    />
  )
}

TextField.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  required: PropTypes.bool,
  fullWidth: PropTypes.bool,
  size: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func
}

TextField.defaultProps = {
  type: 'text',
  required: false,
  fullWidth: true,
  size: '10',
  value: '',
  placeholder: '',
  onChange: () => {},
  onKeyPress: () => {},
  input: null,
  meta: null
}

export default TextField
