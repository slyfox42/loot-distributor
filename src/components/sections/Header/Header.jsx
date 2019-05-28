import './Header.scss'
import LanguageSelection from '../../atoms/LanguageSelection'
import React from 'react'

const Header = () => {
  return (
    <div className="header-container">
      <div className="app-title">Albion Loot Splitter</div>
      <LanguageSelection />
    </div>
  )
}

export default Header
