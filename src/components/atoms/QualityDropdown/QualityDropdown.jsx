import './QualityDropdown.scss'
import { DropdownMenu } from 'react-md'
import PropTypes from 'prop-types'
import React from 'react'

const QualityDropdown = ({ children, onClick, idx }) => (
  <DropdownMenu
    id={`quality-dropdown-${idx}`}
    listClassName="quality-dropdown"
    menuItems={['Normal', 'Good', 'Outstanding', 'Excellent', 'Masterpiece']}
    toggleQuery=".selectable-item"
    onClick={onClick}
    anchor={{
      x: DropdownMenu.HorizontalAnchors.LEFT,
      y: DropdownMenu.VerticalAnchors.BOTTOM
    }}
    position={DropdownMenu.Positions.TOP_LEFT}
  >
    {children}
  </DropdownMenu>
)

QualityDropdown.propTypes = {
  idx: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default QualityDropdown
