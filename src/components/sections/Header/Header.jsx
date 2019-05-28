import './Header.scss'
import LanguageSelection from '../../atoms/LanguageSelection'
import React from 'react'

const Header = () => {
  return (
    <div className="header-container">
      <div className="app-title">Albion Loot Distributor</div>
      <LanguageSelection />
    </div>
  )
}

export default Header
